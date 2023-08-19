const express = require('express');
const dotenv = require('dotenv');
const Config = require('./etc/config.js');
const connection = require('./db.js');
const router = require('./routers/index.js');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

async function startServer() {
  try {
    await connection(); // Call the connection function
    console.log('Connected to MSSQL');
    app.listen(Config.PORT, () => {
      console.log(`Successfully started on http://localhost:${Config.PORT}`);
    });
  } catch (error) {
    console.log('Failed to connect to MSSQL:', error);
  }
}
startServer();

