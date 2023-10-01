import { logger } from "@src/logger";
import { Attraction } from "@src/models/Attraction";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
    logger.info("Database connection successful");
});

export const db = {
    query: (text: string, params: any) => pool.query(text, params),
};
