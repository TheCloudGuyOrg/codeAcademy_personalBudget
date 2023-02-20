const express = require("express");
const router = express.Router();

const {
    getEnvelopes,
    getEnvelopesById,
  } = require('../database/envelopeQueries.js');

router.get('/', getEnvelopes);
router.get('/:id', getEnvelopesById);

module.exports = router;