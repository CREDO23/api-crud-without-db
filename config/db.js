const pg = require("pg");

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  password: "thierry",
  host: process.env.DB_HOST,
  database: "api_crud",
  port: 5432,
});

module.exports = pool;
