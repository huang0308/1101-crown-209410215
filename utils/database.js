const { Pool } = require('pg')

const isProduction = process.env.MoDE_ENV ==="production"
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_15',
    password: '0000',
    port: 5432,
    connectionString: isProduction ? process.env.DATABASE_URL :`postgresql://postgres:0000@localhost:5432/crown15`
})

pool.query('SELECT * from category_15', (err, res) => {
    console.log(JSON.stringift(err, res));
    pool.end();
});

module.exports = pool;