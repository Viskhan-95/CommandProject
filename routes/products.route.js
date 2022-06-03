const { Router } = require('express');

const { productController } = require('../controllers/products.controller');

const router = Router();

router.get('/product',productController.getProducts);

router.patch('/admin/:id', productController.patchProdukts);

router.delete('/admin/:id', productController.deleteProducts);

router.post('/admin', productController.postProducts)

router.get('/users/ca:id')

module.exports = router;
