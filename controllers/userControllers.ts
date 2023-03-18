import { Request, Response } from 'express';
import User from '../models/User';
import 'dotenv/config';
import { addUser, checkEmail } from '../services/userServices';
import { hashPassword, signJwt } from '../utils/funcs';

export const registerUser = async (req: Request, res: Response) => {

    const {
        username,
        email,
        password,
        gender,
        region
    }:User = req.body;

    try {
        
        const user = await checkEmail(email);
        
        if(user.rows.length > 0){
            console.log(user.rows.length);
            return res.status(400).send('User already exists!');
        }

        const hashedPassword = await hashPassword(password);

        const saved = await addUser(username, email, hashedPassword, gender, region);

        if(!saved){
            return res.status(500).send('Server error!');
        }

        const token = await signJwt(process.env.SECRET!, saved.rows[0].id);

        res.status(201).json({
            username,
            email,
            gender,
            region,
            token
        });
        
    } catch (error) {

        if(typeof error === 'string')  res.status(500).send(error);
        else if (error instanceof Error) res.status(500).send(error.message);
    
    }
};