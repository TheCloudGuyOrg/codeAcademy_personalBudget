//Database Connection
const db = require('./dbconnection.js');

//Get Transactions Query: Path: GET /api/v1/transactions
const getTransactions = async (request, response) => {

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

//Get Transaction by ID: Path: GET /api/v1/transactions/:id
const getTransactionById = async (request, response) => {
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

//Update Transaction Path: PUT /api/v1/transactions/:id
    //Update Envelope Budget Amount when executed. 
const updateTransaction = async (request, response) => { 
  const transactionId = parseInt(request.params.id)
  const { date, payment_amount, payment_reciepient, envelope_id } = request.query
  
  const transactionQuery = 'UPDATE transactions SET date = $1, payment_amount = $2, payment_reciepient = $3, envelope_id = $4 WHERE id = $5'

  try {
    await db.query(transactionQuery, [date, payment_amount, payment_reciepient, envelope_id, transactionId], (error, results) => {
      if (error) {
        return response.status(400).send({
          status: 'Failure',
          message: `Could not update transaction with ID ${transactionId}`,
          })
        } else {
        response.status(200).send({
          status: 'Success',
          message: `Transaction with ID ${transactionId} updated`,
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
}

//Delete Transation Path: DELETE /api/v1/transactions/:id
    //Update Envelope Budget Amount when executed. 
    const deleteTransaction = async (request, response) => {
      const id = parseInt(request.params.id)
      const deleteTransaction = 'DELETE FROM transactions WHERE id = $1'
    
      try {
        await db.query(deleteTransaction, [id], (error, results) => {
          if (results.rowCount < 1) {
            return response.status(400).send({
              status: 'Failure',
              message: "Record not found",
            })
          } else {
          response.status(200).send({
            status: 'Success',
            message: `Transaction deleted with ID: ${id}`,
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
    
//Export Queries
module.exports = {
    getTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction
};