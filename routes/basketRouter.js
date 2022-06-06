const express = require('express');
const basketRouter = express.Router();
const cors = require('cors');
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware');

basketRouter.use(express.json());
basketRouter.use(cors());               
basketRouter.use(express.urlencoded({extended: true}));

basketRouter.get('/', basketController.getAll);

basketRouter.post('/', basketController.create);

module.exports = basketRouter;