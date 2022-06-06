const db = require('../models/index');

class TypeController {
  async create(req, res) {
    console.log(req.body.name)
    let brand = await db.Type.create({
        name: req.body.name,
    })
    
    return res.json(brand);
  }

  async getAll(req, res) {
    return await db.Type.findAll().then(type => res.json(type));
  }
}

module.exports = new TypeController()