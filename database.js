const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10340710',
  password: 'ibLB3RGpH4',
  database: 'sql10340710',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Base de datos conectada');
  }
});

module.exports = mysqlConnection;
