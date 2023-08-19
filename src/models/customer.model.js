const db = require('../db.js');
const crypto = require('crypto');

const Customer = (customer) => {
  this.id = customer.id;
  this.fullName = customer.fullName;
  this.gender = customer.gender;
  this.dob = customer.dob;
  this.phoneNumber = customer.phoneNumber;
};

Customer.getAll = async () => {
  const request = await db();
  let query = `Select * from customer`;
  return (await request.query(query)).recordset;
};

Customer.create = async (customer) => {
  const request = await db();
  const { fullName, gender, dob, phoneNumber } = customer;
  let query = `Insert into customer (id, fullName, gender, dob, phoneNumber) values('${crypto.randomUUID()}', '${fullName}', '${gender}', '${dob}', '${phoneNumber}')`;
  const result = await request.query(query);
  return result.rowsAffected[0];
};

module.exports = Customer;
