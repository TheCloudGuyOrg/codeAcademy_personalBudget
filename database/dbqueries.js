const express = require('express')
const app = express()
const db = require('./dbconnection.js')


const getEnvelopes = (request, response) => {
    db.query('SELECT * FROM envelopes ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getEnvelopesById = (request, response) => {
    const id = parseInt(request.params.id)
  
    db.query('SELECT * FROM envelopes WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  module.exports = {
    getEnvelopes,
    getEnvelopesById,
  }

