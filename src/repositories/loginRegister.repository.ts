import { QueryResult } from "pg";
import { pool } from "../database/connection";
import LoginRegisterRepoInterface from "./LoginRegisterRepoInterface";

export default class LoginRegisterRepository implements LoginRegisterRepoInterface{

    async checkEmail (email: string): Promise<QueryResult> {
        return await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    } 

    async addUser (
        username: string, 
        email: string, 
        hashedPassword: string, 
        gender: string, 
        region: string
        ): Promise<QueryResult> {
            
            return await pool.query("INSERT INTO users (username, email, password, gender, region) VALUES ($1, $2, $3, $4, $5) RETURNING *", [
                username,
                email,
                hashedPassword,
                gender,
                region
        ]);
    } 
};