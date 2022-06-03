const Review = require("../models/Review.model");

module.exports.reviewsController = {
    getReview: async (req, res) => {
        try {
            const reviews = await Review.find({ productsId: req.params.id });
            res.json(reviews);
        } catch (err) { res.json(err) }
    },
    addReview: async (req, res) => {
        try {
            const review = await Review.create({
                reviews: req.params.reviews,
                review: req.body.review
            });
            res.json(review);
        } catch (err) { res.json(err) }
    },
    delReview: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id);
            res.json("Отзыв удален")
        } catch (err) { res.json(err) }
    }
}