const Product = require('../models/Product.model')
module.exports.productController = {
    getProducts: (req,res)=>{
        Product.find().then((data)=>{
            res.json(data)
        })
    },
    getProductsFromBrand: (req,res)=>{
Product.find({brandId: req.params.id}).then((data)=>{
    res.json(data)
})
    },

    getProductsFromCateg: (req,res)=>{
        Product.find({categoryId: req.params.id}).then((data)=>{
            res.json(data)
        })
            },
            
    patchProdukts: (req,res)=>{
        Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
        }).then((data)=>{
            res.json(data)
        })
    },
    deleteProducts: (req,res)=>{
        Product.findByIdAndRemove(req.params.id).then((data)=>{
            res.json(data)
        })
    },

    postProducts: (req,res)=>{
        Product.create({
            name: req.body.name,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId

        }).then((data)=>{
            res.json(data)
        }).catch((err)=>{
            res.json(err)
        })
    },
}