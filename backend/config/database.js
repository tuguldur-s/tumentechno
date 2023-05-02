const mysql = require("mysql");
const fs = require('fs');
let obj = {};

obj = {
  host: 'db-mysql-sgp1-66799-do-user-11118497-0.b.db.ondigitalocean.com',
  database: 'itlab',
  user: 'itlabadmin',
  port: 25060,
  ssl: {
    ca: fs.readFileSync("./public/ca-certificate.crt"),
  },
  password: 'AVNS_ScejnR_l6t7kBx1RSSh'
}


const db = mysql.createConnection(obj);
module.exports = db;