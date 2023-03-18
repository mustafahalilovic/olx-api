import { pool } from "../database/connection";

export const checkEmail = async (email: string)=> await pool.query("SELECT * FROM users WHERE email=$1", [email]);
export const addUser = async (
    username: string, 
    email: string, 
    hashedPassword: string, 
    gender: string, 
    region: string
    ) => await pool.query("INSERT INTO users (username, email, password, gender, region) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
        username,
        email,
        hashedPassword,
        gender,
        region
]);