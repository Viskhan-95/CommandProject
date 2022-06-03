const User = require("../models/Client.model");
const Cart = require("../models/Cart.model");

module.exports.userController = {
  gitController: (req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getIdControllers: (req, res) => {
    User.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  postController: async (req, res) => {
    try {
      const newUser = await User.create({
        name: req.body.name,
        age: req.body.age,
      });     
      await Cart.create({
        userId: newUser._id
      });
      res.json("Пользователь добавлен");
    } catch(err) {
        res.json(err);
      }
  },

pathController: (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
  }, { new: true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
},

  deleteController: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Пользователь удален");
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
