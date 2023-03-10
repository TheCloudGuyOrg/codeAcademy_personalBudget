//Use Express
const express = require("express");
const api = express.Router();

//Import Queries
const {
	getTransactions,
	getTransactionById,
	deleteTransaction,
	updateTransaction
} = require('../database/transactionQueries.js');

//Transaction API Routes
api.get('/', getTransactions);
api.get('/:id', getTransactionById);
api.delete('/:id', deleteTransaction);
api.put('/:id', updateTransaction);

//Export API
module.exports = api;




