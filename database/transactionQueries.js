//Database Connection
const db = require('./dbconnection.js');

//Get Transactions Query
getTransactions = async (request, response) => {

  try {
    const query = 'SELECT * FROM transactions ORDER BY id ASC'
    try {
      await db.query(query, (error, results) => {
        if (results.rowCount < 1) {
          return response.status(404).send({
            message: "Records not found"
          })
        } else {
        response.status(200).send({
          status: 'Success',
          message: 'Transaction Information retrieved',
          data: results.rows,
          })
        }
      })
    }
    catch (error) {
      return response.status(500).send({
              error: error.message
          })
    }
  }
  catch (error) {
    return response.status(500).send({
		error: error.message
	})
  }
};

//Get Transaction by ID
getTransactionById = async (request, response) => {
    const id = parseInt(request.params.id)
    const query = 'SELECT * FROM transactions WHERE id = $1'
    try {  
      await db.query(query, [id], (error, results) => {
        if (results.rowCount < 1) {
          return response.status(404).send({
            status: 'Failure',
            message: "No envelope information found",
            })
        } else {
        response.status(200).send({
          status: 'Success',
          message: 'Transaction Information retrieved',
          data: results.rows[0],
          })
        }
      })
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