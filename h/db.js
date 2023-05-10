const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'lacucalo',
    host: 'localhost',
    database: 'employees',
    password: '0000',
    port: 5432,
});

module.exports = pool;