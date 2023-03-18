import { config } from "./config";
import Pool from "pg-pool";

export const pool = new Pool(config);
