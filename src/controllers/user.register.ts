import 'dotenv/config';
import { Request, Response } from 'express';
import User from '../models/user.model';
import { signJwt } from '../utils/authentication';
import { hashPassword } from '../utils/hashPassword';
import { validateData } from '../utils/validateData';
import { errorHandler } from '../utils/errorHandler';
import LoginRegisterRepository from '../repositories/loginRegister.repository';

export const registerUser = async (req: Request, res: Response): Promise<Response | undefined> => {

    const {
        username,
        email,
        password,
        gender,
        region
    }:User = req.body;

    try {

        const isValid = validateData(email, password);
        if(!isValid.valid){
            return res.status(400).send(isValid);
        };
        
        const register = new LoginRegisterRepository();

        const user = await register.checkEmail(email);
        
        if(user.rows.length > 0) return res.status(400).send('User already exists!');

        const hashedPassword = await hashPassword(password);

        const saved = await register.addUser(username, email, hashedPassword, gender, region);

        if(!saved)  return res.status(500).send('Server error!');
        
        const token = await signJwt(process.env.SECRET!, saved.rows[0].id);

        res.status(201).json({
            username,
            email,
            gender,
            region,
            token
        });
        
    } catch (error) {

         const {
            code,
            msg
         } = errorHandler(error);

         res.status(code).send(msg);
    }
};