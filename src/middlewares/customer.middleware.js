const CustomerController = require('../controllers/customer.controller');

const CustomerMiddleware = {
  async getAll(req, res, next) {
    const result = await CustomerController.getAll();
    res
      .status(result.statusCode)
      .send({ message: result.message, data: result.data });
  },

  async create(req, res, next) {
    const data = req.body;
    const { fullName, gender, dob, phoneNumber } = data;
    const errorMessage = [];
    // validate
    if (!['MALE', 'FEMALE', 'OTHER'].includes(gender.toUpperCase())) {
      errorMessage.push('Gender must be one of male, female and other');
    }
    if (phoneNumber.length != 10) {
      errorMessage.push('Phone number must be at length of 10 characters');
    }
    if (fullName.length < 3 || fullName.length > 30) {
      errorMessage.push('Full name must be in length of [3,30]');
    }
    if (!Date.parse(dob)) {
      errorMessage.push('Date of birth must be a valid date');
    }
    if (errorMessage.length != 0) {
      res.status(400).send({ message: errorMessage });
    }
    // go to controller
    else {
      const result = await CustomerController.create(data);
      res
        .status(result.statusCode)
        .send({ message: result.message, data: result.data });
    }
  },
};

module.exports = CustomerMiddleware;
