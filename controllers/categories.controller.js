const { json } = require('body-parser')
const Category = require('../models/Category.model')
module.exports.categoryController = {
getCategories: (req,res)=>{
    Category.find().then((data)=>{
        res.json(data)
    })
    .catch(()=>{
        res.json(err)
    })
},
getCategoriesId: (req,res)=>{
    Category.findById(req.params.id).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json(err)
    })
},
postCategories: (req,res)=>{
    Category.create({
        name: req.body.name
    })
    .then((data)=>{
        json(data)
    }).catch(()=>{
        res.json(err)
    })
},
deleteCategories: (req,res)=>{
    Category.findByIdAndRemove(req.params.id).then(()=>{
        res.json('Категория удалена!')
    })
    .catch(()=>{
        res.json(err)
    })
},

patchControllers: (req,res)=>{
    Category.findByIdAndUpdate(req.params.id,{
        name:req.body.name
    }).then((data)=>{
        res.json(data)
    }).catch(()=>{
        res.json(err)
    })
},



}
