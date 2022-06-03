const { Router } = require('express')

const { categoryController } = require('../controllers/categories.controller');

const router = Router()

router.get('/user/categories',categoryController.getCategories);
router.get('user/categories/:id', categoryController.getCategoriesId);
router.post('/admin/category/add', categoryController.postCategories);
router.delete('/admin/delete/:id', categoryController.deleteCategories);
router.patch('/admin/update/:id', categoryController.patchControllers);

module.exports = router;