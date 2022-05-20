const express = require('express');
const userRouter = express.Router();
const cors = require('cors');
const userController = require('../controllers/userController')

userRouter.use(express.json());
userRouter.use(cors());               
userRouter.use(express.urlencoded({extended: true}));

userRouter.get('/', userController.getAll);

userRouter.post('/', userController.create);

userRouter.delete('/', async (req, res) => {
    console.log('delete');
})

module.exports = userRouter;