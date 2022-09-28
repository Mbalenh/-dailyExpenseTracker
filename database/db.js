const pgp = require('pg-promise')();

const DATABASE_URL= process.env.DATABASE_URL ||postgres://jyfqrwyv:8ULVIpWebFF4D9RkmdLWibXC1JapLlJA@surus.db.elephantsql.com/jyfqrwyv

const config = { 
  connectionString : DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
  config.ssl = { 
    rejectUnauthorized : false
  }
}

const db = pgp(config);
module.exports = db;
