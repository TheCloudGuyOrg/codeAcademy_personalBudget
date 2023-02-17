const { Pool, Client } = require('pg')
const connectionString = 'postgresql://dercox@localhost:5432/envelopes'
 
 
const pool = new Pool({
    connectionString,
  })
   
pool.query('SELECT * FROM envelopes WHERE id=1', (err, res) => {
console.log(res.rows)
pool.end()
})

