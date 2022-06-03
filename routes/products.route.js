const { Router } = require('express');

const { productController } = require('../controllers/products.controller');

const router = Router();

router.get('/product',productController.getProducts);

router.get('/users/categ/:id', productController.getProductsFromCateg);

router.get('/users/brand/:id', productController.getProductsFromBrand);

router.get('/users/prod/:id', productController.getProductsById);

router.patch('/admin/:id', productController.patchProdukts);

router.delete('/admin/:id', productController.deleteProducts);

router.post('/admin/product/add', productController.postProducts)



module.exports = router;
