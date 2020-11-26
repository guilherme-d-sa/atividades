var sql = require('mssql');

let dbConfig = {
	server: 'bancogrupo9.database.windows.net',
	user: 'adm',
	password: '#Gfgrupo9',
	database: 'grupo9',
	"options": {
		"encrypt": true,
		"enableArithAbort": true
	}
}

let connection = new sql.ConnectionPool(dbConfig);

connection.connect((err) => {
	if (err) throw err;
	console.log('Banco de Dados Concectado com Sucesso')
})

module.exports = connection;

// module.exports = {
//   development: {
//     dialect: "sqlite",
//     storage: "./db.development.sqlite"
//   },
//   test: {
//     dialect: "sqlite",
//     storage: ":memory:"
//   },
//   production: {
//     username: 'adm',
//     password: '#Gfgrupo9',
//     database: 'grupo9',
//     host: 'bancogrupo9.database.windows.net',
//     dialect: 'mssql',
//     xuse_env_variable: 'DATABASE_URL',
//     dialectOptions: {
//       options: {
//         encrypt: true
//       }
//     },
//     pool: { 
//       max: 5,
//       min: 1,
//       acquire: 5000,
//       idle: 30000,
//       connectTimeout: 5000
//     }
//   }
// };
 
