
module.exports = {
  PORT: parseInt(process.env.PORT || '3001'),
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT || '1433'),
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'sa',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '12345',
  DATABASE_NAME: process.env.DATABASE_NAME || 'shopping',
};