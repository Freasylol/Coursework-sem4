const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const cors = require('cors');

router.use(express.json());
router.use(cors());               
router.use(express.urlencoded({extended: true}));

router.get('/', async (req, res) => {
    await Users.findAll().then(users => res.json(users));
})

router.post('/', async (req, res) => {
    res.send(req.body);
    await Users.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userRole: req.body.userRole,
      });
    
});

router.delete('/', async (req, res) => {
    console.log('delete');
})

module.exports = router;