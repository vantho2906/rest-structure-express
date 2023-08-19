const mssql = require('mssql');
const Config = require('./etc/config.js');

const sqlConfig = {
  user: Config.DATABASE_USERNAME,
  password: Config.DATABASE_PASSWORD,
  database: Config.DATABASE_NAME,
  server: Config.DATABASE_HOST,
  options: {
    trustServerCertificate: true,
  },
};

let pool;
const connection = async () => {
  try {
    if (!pool) {
      pool = await mssql.connect(sqlConfig);
    }
    return pool.request();
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
