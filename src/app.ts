import 'dotenv/config';
import { runMigrations } from './database/migrations';
import { userRoutes } from './routes/user.route';
import express, { Application } from "express";
import cors from 'cors';

const app: Application = express();

// MIDDLEWARE
app.use(express.json()); // parse incoming object to json
app.use(cors());         // allow cros-origin comunication
app.use(userRoutes);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    runMigrations();
});