import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';

export const hashPassword = async (password: string) => await bcrypt.hash(password, 8);

export const signJwt = async (secret: Secret, id: Number) => await jwt.sign({id}, secret);