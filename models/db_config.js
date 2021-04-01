require("dotenv").config();
const {HOST, USER, PASSWORD, DATABASE} = process.env;
module.exports = require('knex')({
    client: 'mysql',
    connection: {
      host : HOST,
      user : "google",
      password : PASSWORD,
      database : DATABASE
    }
  });


