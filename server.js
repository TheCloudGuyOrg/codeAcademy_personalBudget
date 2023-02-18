const express = require('express');
const app = express();
module.exports = app;

//Set Port to 3000
const PORT = process.env.PORT || 3000;

//Envelope Router
const envelopesRouter = require('./server/envelopes.js');
app.use('/envelopes', envelopesRouter);

//Start App 
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); 
})