const express = require('express');
const deviceRouter = express.Router();
const cors = require('cors');
const deviceController = require('../controllers/deviceController')

deviceRouter.use(express.json());
deviceRouter.use(cors());               
deviceRouter.use(express.urlencoded({extended: true}));

deviceRouter.post('/', deviceController.create);

deviceRouter.get('/', deviceController.getAll);

module.exports = deviceRouter;