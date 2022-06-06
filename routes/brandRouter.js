const express = require('express');
const brandRouter = express.Router();
const cors = require('cors');
const brandController = require('../controllers/brandController')

brandRouter.use(express.json());
brandRouter.use(cors());               
brandRouter.use(express.urlencoded({extended: true}));

brandRouter.get('/', brandController.getAll);

brandRouter.post('/', brandController.create);

module.exports = brandRouter;