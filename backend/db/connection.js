// PG database client/connection setup
const { Pool } = require('pg');
require('dotenv').config();
console.log('process.env', process.env)
// was trying to use env file but it doesn't read for some reason? how do i fix this
const dbParams = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,

};
console.log('dbParams', dbParams)
const db = new Pool(dbParams);

db.connect();

module.exports = db;
