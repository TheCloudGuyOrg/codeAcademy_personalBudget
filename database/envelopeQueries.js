//Database Connection
const db = require('./dbconnection.js')

//Get Envelopes Query
const getEnvelopes = (request, response) => {
  db.query('SELECT * FROM envelopes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

//Get Envelopes Query
const getEnvelopesById = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('SELECT * FROM envelopes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

//Add Envelopes Query
const addEnvelope = (request, response) => {
  
};

//Update Envelopes Query
const updateEnvelope = (request, response) => {

};

//Delete Envelopes Query
const deleteEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('DELETE FROM envelopes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Envelope deleted with ID: ${id}`)
  })
};
 
//Export Queries
module.exports = {
  getEnvelopes,
  getEnvelopesById,
  addEnvelope,
  updateEnvelope,
  deleteEnvelope
}

 