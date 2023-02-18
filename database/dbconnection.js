const { Pool } = require('pg');
const {DB_USER, PORT, DB_HOST, DB_DATABASE} = require('./dbconfig');
const connectionString = `postgresql://${DB_USER}@${DB_HOST}:${PORT}/${DB_DATABASE}`;

const pool = new Pool({
    connectionString,
  });

const getEnvelopes = (id) => {
    pool.query(`SELECT * FROM envelopes WHERE id=${id}`, (err, res) => {
        console.log(res.rows)
        pool.end()
    });    
};  

getEnvelopes(1);