import jwt, { Secret } from 'jsonwebtoken';

export const signJwt = async (secret: Secret, id: Number) => await jwt.sign({id}, secret);