import { migrate } from "postgres-migrations";
import { pool } from "./connection";
import path from 'path';

export const runMigrations = async (): Promise<void> =>{
    const client = await pool.connect();

    try {
        
        await migrate({client}, path.resolve(__dirname, "../migrations"));
        
    } catch (error) {
       
        if(typeof error === 'string')    console.log(error);
        else if (error instanceof Error) console.log(error.message);    
        
    } finally {
        await client.end();
    }
};