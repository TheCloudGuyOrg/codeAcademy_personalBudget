//Use Express
const express = require('express');
const app = express();

//Body Parser
const bodyParser = require('body-parser')

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
const envelopesRouter = require("./routes/envelopeRoutes.js");
app.use("/envelopes", envelopesRouter);

//Define Port
const PORT = process.env.PORT || 3000;

//Start App 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
})