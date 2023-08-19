const { Router } = require('express');
const CustomerMiddleware = require('../middlewares/customer.middleware'); 
const route = Router();
route.get('/get-all', CustomerMiddleware.getAll);
route.post('/create', CustomerMiddleware.create);

module.exports = route;