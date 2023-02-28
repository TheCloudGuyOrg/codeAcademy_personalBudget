//Database Connection
const db = require('./dbconnection.js');

//Get Envelopes Query
const getEnvelopes = async (request, response) => {
  const query = 'SELECT * FROM envelopes ORDER BY id ASC'
  try {
    await db.query(query, (error, results) => {
      if (results.rowCount < 1) {
        return response.status(404).send({
          message: "Records not found"
        })
      } else {
      response.status(200).send({
        status: 'Success',
        message: 'Envelopes Information retrieved',
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
};

//Get Envelopes by ID Query
const getEnvelopesById = async (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'SELECT * FROM envelopes WHERE id = $1'
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
        message: 'Envelope Information retrieved',
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

//Add Envelopes Query 
const addEnvelope = async (request, response) => {
  const { id, title, budget } = request.query
  const query = 'INSERT INTO envelopes (id, title, budget) VALUES ($1, $2, $3) RETURNING *'
  try {
    await db.query(query, [id, title, budget], (error, results) => {
      if (error) {
        return response.status(400).send({
          status: 'Failure',
          message: "Could not add envelope",
          })
      } else {
      response.status(201).send({
        status: 'Success',
        message: 'New envelope created',
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

//Update Envelopes Query
const updateEnvelope = async (request, response) => {
  const id = parseInt(request.params.id)
  const { title, budget } = request.query
  const query = 'UPDATE envelopes SET title = $1, budget = $2 WHERE id = $3'
  try {
    await db.query(query, [title, budget, id], (error, results) => {
      if (results.rowCount < 1) {
        return response.status(400).send({
          status: 'Failure',
          message: `Could not update envelope with ID ${id}`,
          })
        } else {
        response.status(200).send({
          status: 'Success',
          message: `Envelope with ID ${id} updated`,
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

//Delete Envelopes Query
const deleteEnvelope = async (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'DELETE FROM envelopes WHERE id = $1'
  try {
    await db.query(query, [id], (error, results) => {
      if (results.rowCount < 1) {
        return response.status(400).send({
          status: 'Failure',
          message: "Record not found",
        })
      } else {
      response.status(204).send({
        status: 'Success',
        message: `Envelope deleted with ID: ${id}`,
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

//Add Envelope Transaction Query
  // @desc		Add a Transaction
  // @route		DELETE /api/v1/envelopes/:id/transactions
addEnvelopeTransaction = async (request, response) => {
  const id = parseInt(request.params.id)
  const { title, budget } = request.query
  const date = new Date()

  const envelopeQuery = ''
  const transactionQuery = ''
  const updateEnvelopeQuery = ''

  try {
    
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
		})
  }
};

//Get Envelope Transaction Query
getEnvelopeTransactions = async (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'SELECT * FROM transactions WHERE envelope_id = $1'

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
        message: 'Envelope Transaction Information retrieved',
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
  getEnvelopes,
  getEnvelopesById,
  addEnvelope,
  updateEnvelope,
  deleteEnvelope,
  addEnvelopeTransaction,
  getEnvelopeTransactions
};


// Fix needing to Submit id on add Envelope
// Fix null value for update envelope
// Add Envelope Transactions
