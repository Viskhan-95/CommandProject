const { Router } = require('express')

const { categoryController } = require('../controllers/categories.controller');

const router = Router()

router.get('/user/categories',categoryController.getCategories);
router.get('user/categories/id', categoryController.getCategoriesId);



module.exports = router;