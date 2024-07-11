//var mysql = require('mysql');
//var connection = mysql.createConnection({
//	host:'localhost',
//	user:'USERNAME_HERE',
//	password:'PASSWORD_HERE',
//	database:'DATABASE_NAME_HERE'
//});
//connection.connect(function(error){
//	if(!!error) {
//		console.log(error);
//	} else {
//		console.log('Connected..!');
//	}
//});
//
//module.exports = connection;

const Pool = require('pg').Pool
const connection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgrespassword',
  port: 11,
})

module.exports = connection;