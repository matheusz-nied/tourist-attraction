import { logger } from "@src/logger";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
    logger.info("Database connection successful");
});

export { pool as db };
