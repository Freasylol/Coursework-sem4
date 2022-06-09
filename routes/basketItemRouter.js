const express = require('express');
const basketItemRouter = express.Router();
const cors = require('cors');
const basketItemController = require('../controllers/basketItemController')
const checkRole = require('../middleware/checkRoleMiddleware');

basketItemRouter.use(express.json());
basketItemRouter.use(cors());               
basketItemRouter.use(express.urlencoded({extended: true}));

basketItemRouter.get('/', basketItemController.getAll);

basketItemRouter.post('/', basketItemController.create);

basketItemRouter.get('/:id', basketItemController.getById);

module.exports = basketItemRouter;