const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.get('/user/review/:id', reviewsController.getReview);
router.post('/user/review/add/:id', reviewsController.addReview);
router.delete('/admin/review/delete/:id');

module.exports = router;