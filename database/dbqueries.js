const db = require('./dbconnection.js');

db.query('Select * FROM envelopes WHERE id=$1', ['3'], (err, res) => {
    if (err) {
        throw err
    } else {
        console.log(res.rows)
    }
});