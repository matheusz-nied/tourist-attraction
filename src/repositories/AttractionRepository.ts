import { Attraction } from "@src/models/Attraction";
import { AttractionRepositoryInterface } from "./AttractionRepositoryInterface";
import { db } from "@src/config/database";
import { logger } from "@src/logger";

export class AttractionRepository implements AttractionRepositoryInterface {
    getOne(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }

    async getAll(): Promise<Attraction[]> {
        const response = await db.query(
            "SELECT * FROM attraction ORDER BY desire_visit ASC",
        );
            console.log(response)
        return response.rows
    }

    async create({
        name,
        description,
        location,
        desire_visit,
    }: Attraction): Promise<void> {
        const { country, state } = location;

        try {
            await db.query(
                "INSERT INTO location (country, state) VALUES ($1, $2)",
                [country, state],
            );

            await db.query(
                "INSERT INTO attraction (name, description,desire_visit, location_id) VALUES ($1, $2, $3, $4)",
                [name, description, desire_visit, 2],
            );
        } catch (error) {
            logger.error(error);
        }
    }

    update(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }

    delete(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }
}
