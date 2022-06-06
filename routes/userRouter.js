const express = require('express');
const userRouter = express.Router();
const cors = require('cors');
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/checkAuthMiddleware');

userRouter.use(express.json());
userRouter.use(cors());               
userRouter.use(express.urlencoded({extended: true}));

userRouter.get('/login', userController.login);

userRouter.post('/registration', userController.registration);

userRouter.get('/auth', authMiddleware, userController.check);

userRouter.get('/', userController.getAll);

userRouter.get('/:id', userController.getOne);

userRouter.delete('/', userController.delete);

userRouter.put('/', userController.update);

module.exports = userRouter;