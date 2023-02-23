//Database Connection
const db = require('./dbconnection.js');

//Get Envelopes Query
const getEnvelopes = (request, response) => {
  const query = 'SELECT * FROM envelopes ORDER BY id ASC'
  try {
    db.query(query, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
		})
  }
};

//Get Envelopes by ID Query
const getEnvelopesById = (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'SELECT * FROM envelopes WHERE id = $1'
  try {  
    db.query(query, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
	  })
  }
};

//Add Envelopes Query 
const addEnvelope = (request, response) => {
  const { id, title, budget } = request.query
  const query = 'INSERT INTO envelopes (id, title, budget) VALUES ($1, $2, $3) RETURNING *'
  try {
    db.query(query, [id, title, budget], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
	  })
  }
};


//Update Envelopes Query
const updateEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, budget } = request.query
  const query = 'UPDATE envelopes SET title = $1, budget = $2 WHERE id = $3'
  try {
    db.query(query, [title, budget, id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      })
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
		})
  }  
};

//Delete Envelopes Query
const deleteEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  const query = 'DELETE FROM envelopes WHERE id = $1'
  try {
    db.query(query, [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Envelope deleted with ID: ${id}`)
    })
  }
  catch (error) {
    return response.status(500).send({
			error: error.message
		})
  }
};



//Add Envelope Transaction Query
addEnvelopeTransaction = (request, response) => {
  // @desc		Add a Transaction
  // @route		DELETE /api/v1/envelopes/:id/transactions
};

//Get Envelope Transaction Query
getEnvelopeTransactions = (request, response) => {
  // @desc		Get Envelope transactions
  // @route		GET /api/v1/envelope/:id/transactions
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
// Add Async/Await
// Add Error Status
// Add Envelope Transactions
