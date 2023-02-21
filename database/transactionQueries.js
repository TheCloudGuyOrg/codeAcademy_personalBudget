//Database Connection
const db = require('./dbconnection.js');


getTransactions = async (req, res) => {
    // @desc		Get all Transactions
    // @route		GET /api/v1/transactions
}


getTransactionById = async (req, res) => {
    // @desc		Get a Transaction
    // @route		GET /api/v1/transactions/:id
};


updateTransaction = async (req, res) => {
	// @desc		Update a transaction
    // @route		PUT /api/v1/transactions/:id    
};


deleteTransaction = async (req, res) => {
    // @desc		Delete a transaction
    // @route		DELETE /api/v1/transactions/:id
};

//Export Queries
module.exports = {
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
  }

//Update your database to add a transactions feature to your project.

//Transactions should include a date, payment amount, payment recipient, and designated envelope from which to remove funds
