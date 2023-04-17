// PG database client/connection setup
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,

};

const db = new Pool(dbParams);

db.connect();

module.exports = db;
