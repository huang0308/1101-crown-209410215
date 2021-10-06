const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_15',
    password: '0000',
    port: 5432,
})

pool.query('SELECT * from category_15', (err, res) => {
    console.log(JSON.stringift(err, res));
    pool.end();
});

module.exports = pool;