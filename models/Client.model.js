const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({

name: String,
age: Number

});

const User = mongoose.model("User", clientSchema);

module.exports = User