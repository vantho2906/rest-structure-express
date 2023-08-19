const { Router } = require("express");
const router = Router();
const customer = require('./customer.route')

router.use('/customer', customer)
router.get('/', (req, res) => {
  res.send('Hello world!');
})

module.exports = router;
