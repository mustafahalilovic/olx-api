import 'dotenv/config';
import express, { Application } from "express";
import cors from 'cors';
import { runMigrations } from '../database/migrationSetup';
import { userRoutes } from '../routes/users';

const app: Application = express();

// MIDDLEWARE
app.use(express.json()); // parse incoming object to json
app.use(cors());         // allow cros-origin comunication
app.use(userRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    runMigrations();
});