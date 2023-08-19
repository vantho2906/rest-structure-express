const Customer = require('../models/customer.model');

const CustomerController = {
  async getAll() {
    return {
      statusCode: 200,
      data: await Customer.getAll(),
      message: 'Get all customers successfully',
    };
  },

  async create(customer) {
    const rowsAffected = await Customer.create(customer);
    if (rowsAffected > 0)
      return {
        statusCode: 200,
        data: customer,
        message: 'Create customer successfully',
      };
    return {
      statusCode: 400,
      message: 'Create customer failed',
    }; 
  },
};

module.exports = CustomerController;
