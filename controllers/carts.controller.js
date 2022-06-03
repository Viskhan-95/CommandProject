const Cart = require("../models/Cart.model");

module.exports.cartController = {
    addPillCart: async (req, res) => {
        try {
            const pill = await Cart.findOneAndUpdate({ userId: req.params.id }, {
                $push: { products: req.body.products },
            });
            res.json(pill);
        } catch (err) { res.json(err) }
    },
    delPillCart: async (req, res) => {
        try {
            await Cart.findOneAndUpdate(req.params.id, {
                $pull: { products: req.body.products },
            });
            res.json("Препарат удален");
        } catch (err) { res.json(err) }
    },
    clearCart: async (req, res) => {
        try {
            await Cart.findOneAndUpdate({ userId: req.params.id }, {
                products: [],
            });
            res.json("Карзина очищена")
        } catch (err) { res.json(err) }
    }
}