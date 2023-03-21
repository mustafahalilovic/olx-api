import { QueryResult } from 'pg';

export default interface LoginRegisterRepoInterface{
    
    checkEmail(email: string): Promise<QueryResult>;
    addUser(username: string, 
            email: string, 
            hashedPassword: string, 
            gender: string, 
            region: string): Promise<QueryResult>;
};