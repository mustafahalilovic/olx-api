import { Request, Response } from "express"
import LoginRegisterRepository from "../repositories/loginRegister.repository";
import { errorHandler } from "../utils/errorHandler";
import bcrypt from 'bcrypt';
import { signJwt } from "../utils/authentication";

export const loginUser = async (req: Request, res: Response) => {

    const {
        email,
        password
    } = req.body;

    try {
        
        const login = new LoginRegisterRepository();

        const user = await login.checkEmail(email);

        if(!user){
            return res.status(400).send('Incorrect email or password!');
        }

        const userPassword: string = user.rows[0].password;

        if(!bcrypt.compare(password, userPassword)) {
            return res.status(400).send('Incorrect email or password!');
        }
        
        const username: string = user.rows[0].username; 
        const token = await signJwt(process.env.SECRET!, user.rows[0].id);

        res.json({
            username,
            token
        });

    } catch (error) {

        const {
            code,
            msg
         } = errorHandler(error);

         res.status(code).send(msg);
         
    }
} 