//Database Connection
const db = require('./dbconnection.js');

    // @desc		Get all Transactions
    // @route		GET /api/v1/transactions
getTransactions = async (request, response) => {

  try {

  }
  catch (error) {
    return response.status(500).send({
		error: error.message
	})
  }
};

    // @desc		Get a Transaction
    // @route		GET /api/v1/transactions/:id
getTransactionById = async (request, response) => {

  try {

  }
  catch (error) {
    return response.status(500).send({
		error: error.message
	})
  }
};

	// @desc		Update a transaction
    // @route		PUT /api/v1/transactions/:id 
updateTransaction = async (request, response) => { 
    
  try {

  }
  catch (error) {
    return response.status(500).send({
		error: error.message
	})
  }
};

    // @desc		Delete a transaction
    // @route		DELETE /api/v1/transactions/:id
deleteTransaction = async (request, response) => {

  try {

  }
  catch (error) {
    return response.status(500).send({
		error: error.message
	})
  }
};

//Export Queries
module.exports = {
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
  };