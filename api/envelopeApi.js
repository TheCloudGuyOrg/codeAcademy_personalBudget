//Use Express
const express = require("express");
const api = express.Router();

//Import Queries
const {
    getEnvelopes,
    getEnvelopesById,
    addEnvelope,
    updateEnvelope,
    deleteEnvelope,
    addEnvelopeTransaction,
    getEnvelopeTransactions
} = require('../database/envelopeQueries.js');

//API Routes
api.get('/', getEnvelopes);
api.get('/:id', getEnvelopesById);
api.post("/", addEnvelope);
api.put("/:id", updateEnvelope);
api.delete("/:id", deleteEnvelope);
api.get('/:id/transactions', getEnvelopeTransactions);
api.post('/:id/transactions', addEnvelopeTransaction);

//Export API
module.exports = api;