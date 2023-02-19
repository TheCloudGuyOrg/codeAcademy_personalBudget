const { Client, Pool } = require('pg');
const {DB_USER, PORT, DB_HOST, DB_DATABASE} = require('./dbconfig');

const connectionString = `postgresql://${DB_USER}@${DB_HOST}:${PORT}/${DB_DATABASE}`;
const pool = new Pool ({connectionString});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

;(async () => {
const client = await pool.connect()
try {
    const res = await client.query('SELECT * FROM envelopes WHERE id=$1', ['3'])
    console.log(res.rows)
} catch (err) {
    console.log(err.stack)
} finally {
    client.release()
}
    await pool.end()
})()


