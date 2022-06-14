import express from 'express';
import userController from '../controller/userController.js';

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/:username', userController.findByUsername);
userRouter.delete('/:username', userController.findByUsernameAndDelete);
userRouter.put('/:username', userController.findByUsernameAndUpdate);

export default userRouter;
