const { Router } = require('express');

const { productController } = require('../controllers/products.controller');

const router = Router();

router.get('/product',productController.getProducts);

module.exports = router;
