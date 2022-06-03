const { default : mongoose } = require("mongoose");

const reviewSchema = mongoose.Schema({
    productsId: {
        ref: "Product",
        type: mongoose.SchemaTypes.ObjectId
    },
    review: String
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;