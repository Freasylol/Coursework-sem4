const db = require('../models/index');

class BrandController {
    async create(req, res) {
      let brand = await db.Brand.create({
          name: req.body.name,
      })
      
      return res.json(brand);
    }

    async getAll(req, res) {
        return await db.Brand.findAll().then(type => res.json(type));
    }
}

module.exports = new BrandController()