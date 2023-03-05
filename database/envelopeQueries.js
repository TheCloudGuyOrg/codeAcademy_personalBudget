//Database Connection
const db = require('./dbconnection.js');

//Get Envelopes Query Path: GET /api/v1/envelopes
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

//Get Envelopes by ID Query Path: GET /api/v1/envelopes/:id
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

//Add Envelopes Query Path POST /api/v1/envelopes
    //Update Envelope Budget Amount when executed. 
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

//Update Envelopes Query Path: PUT /api/v1/envelopes/:id
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

//Delete Envelopes Query Path: DELETE /api/v1/envelopes/:id
const deleteEnvelope = async (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'DELETE FROM envelopes WHERE id = $1'
  try {
    await db.query(query, [id], (error, results) => {
      if (error) {
        return response.status(400).send({
          status: 'Failure',
          message: "Record not found",
        })
      } else {
        response.status(200).send({
          status: 'Success',
          message: `Envelope with ID ${id} deleted`,
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

//Add Envelope Transaction Query Path POST /api/v1/envelopes/:id/transactions
    //Update Envelope Budget Amount when executed. 
const addEnvelopeTransaction = async (request, response) => {
  const id = parseInt(request.params.id)
  const { date, payment_amount, payment_reciepient, envelope_id } = request.query
  const query = 'INSERT INTO transactions (id, date, payment_amount, payment_reciepient, envelope_id) VALUES ($1, $2, $3, $4, $5)'
  try {
    await db.query(query, [id, date, payment_amount, payment_reciepient, envelope_id], (error, results) => {
      console.log(id, date, payment_amount, payment_reciepient, envelope_id )
      if (error) {
        return response.status(400).send({
          status: 'Failure',
          message: "Could not add transaction",
          })
      } else {
      response.status(201).send({
        status: 'Success',
        message: 'New transaction created',
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

//Get Envelope Transaction Query Path: GET /api/v1/envelopes/:id/transactions
const getEnvelopeTransactions = async (request, response) => {
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



// Fix POST, UPDATE, DELETE transaction API's to update envelope budget amounts
