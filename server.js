const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const query = require('./database/dbqueries.js')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Validate Connection
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


//Envelope Router
app.get('/envelopes', query.getEnvelopes);
app.get('/envelopes/:id', query.getEnvelopesById)


//Start App 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
})