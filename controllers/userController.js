const db = require('../models/index')

class UserController {
    async create(req, res) {
        res.send(req.body);
        await db.Users.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            userRole: req.body.userRole,
            }); 
    }

    async getAll(req, res) {
        return await db.Users.findAll().then(users => res.json(users));
    }
}

module.exports = new UserController()