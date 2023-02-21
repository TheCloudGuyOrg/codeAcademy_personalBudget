//Database Connection
const db = require('./dbconnection.js')

//Get Envelopes Query
const getEnvelopes = (request, response) => {
  db.query('SELECT * FROM envelopes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

//Get Envelopes Query
const getEnvelopesById = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('SELECT * FROM envelopes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

//Add Envelopes Query **Remove id and automate it 
const addEnvelope = (request, response) => {
  const { id, title, budget } = request.query
  db.query('INSERT INTO envelopes (id, title, budget) VALUES ($1, $2, $3) RETURNING *', 
  [id, title, budget], 
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
};

//Update Envelopes Query
const updateEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, budget } = request.query
db.query(
    'UPDATE envelopes SET title = $1, budget = $2 WHERE id = $3',
    [title, budget, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
};

//Delete Envelopes Query
const deleteEnvelope = (request, response) => {
  const id = parseInt(request.params.id)
  db.query('DELETE FROM envelopes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Envelope deleted with ID: ${id}`)
  })
};

//Add Envelope Transaction Query
addEnvelopeTransaction = async (request, response) => {
  // @desc		Add a Transaction
  // @route		DELETE /api/v1/envelopes/:id/transactions
};

//Get Envelope Transaction Query
getEnvelopeTransactions = async (request, response) => {
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
}

// Add Try/Catch Error Handling
// Add Async/Await
// Add Error Status
// Add Envelope Transactions 