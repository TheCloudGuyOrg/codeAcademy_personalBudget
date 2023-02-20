//Use Express
const express = require("express");
const api = express.Router();

//Import Queries
const {
    getEnvelopes,
    getEnvelopesById,
    addEnvelope,
    updateEnvelope,
    deleteEnvelope
} = require('../database/envelopeQueries.js');

//API Routes
api.get('/', getEnvelopes);
api.get('/:id', getEnvelopesById);
api.post("/", addEnvelope);
api.put("/:id", updateEnvelope);
api.delete("/:id", deleteEnvelope);

//Export API
module.exports = api;