import express from "express";
import { logger } from "./logger";
import { apiErrorValidator } from "./middlewares/api-error-validator";
import attractionRouter from "./routes/attractionRouter";
import homeRouter from "./routes/home";
import dotenv from "dotenv";

///import { router } from "./router";

export class SetupServer {
    public app: express.Application;
    constructor(private port = process.env.PORT) {
        this.app = express();
    }

    public async init() {
        dotenv.config();
        this.setupExpress();
        this.setupErrorHandles();
        this.setupRoutes();
    }

    private setupExpress(): void {
        this.app.use(express.json());
        this.app.set("view engine", "ejs");
        this.app.set("views", __dirname + "/views");
    }

    private async databaseSetup(): Promise<void> {
        // await this.database.connect();
    }

    private setupRoutes(): void {
        this.app.use("/", homeRouter);
        this.app.use("/attractions", attractionRouter);
    }

    public async close(): Promise<void> {
        // await database.close()
    }
    private setupErrorHandles(): void {
        this.app.use(apiErrorValidator);
    }
    public start(): void {
        this.app.listen(this.port, () => {
            logger.info(`Server listening on port ${this.port}`);
        });
    }
}
