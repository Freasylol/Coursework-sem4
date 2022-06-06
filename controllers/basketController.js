const db = require('../models/index');

class BasketController {
    async create(req, res) {
      let basket = await db.Basket.create({
          UserId: req.body.UserId
      })
      
      return res.json(basket);
    }

    async getAll(req, res) {
        return await db.Basket.findAll().then(basket => res.json(basket));
    }
}

module.exports = new BasketController()