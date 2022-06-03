const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    brandId: {
        ref:'Brand',
        type: mongoose.SchemaTypes.ObjectId
    },
    categoryId: {
        ref:'Category',
        type: mongoose.SchemaTypes.ObjectId
    },
    name: String
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;