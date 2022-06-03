const Product = require('../models/Product.model')
module.exports.productController = {
    getProducts: (req,res)=>{
        Product.find().then((data)=>{
            res.json(data)
        })
    },
    patchProdukts: (req,res)=>{
        Product.findByIdAndUpdate(req.params.id).then((data)=>{
            res.json(data)
        })
    },
    deleteProducts: (req,res)=>{
        Product.findByIdAndRemove(req.params.id).then((data)=>{
            res.json(data)
        })
    }


}