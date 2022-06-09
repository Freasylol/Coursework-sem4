const db = require('../models/index');

class BasketItemController {
    async create(req, res) {
      let basket = await db.BasketDevice.create({
          BasketId: req.body.BasketId,
          DeviceId: req.body.DeviceId
      })
      
      return res.json(basket);
    }

    async getAll(req, res) {
      return await db.BasketDevice.findAll().then(basket => res.json(basket));
    }

    
    async getById(req, res) {
      return await db.BasketDevice.findAll({
        where: {
          BasketId: req.params.id
        }
      }).then(basketItems => res.send(basketItems));
    }
}

module.exports = new BasketItemController()