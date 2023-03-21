import express from 'express';
import { loginUser } from '../controllers/user.login';
import { registerUser } from '../controllers/user.register'; 

const userRoutes = express.Router();

userRoutes.post('/users/register', registerUser);
userRoutes.post('/users/login', loginUser);

export { userRoutes };