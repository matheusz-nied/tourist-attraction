import { Attraction } from "@src/models/Attraction";
import { AttractionRepositoryInterface } from "./AttractionRepositoryInterface";
import { db } from "@src/config/database";
import { logger } from "@src/logger";

export class AttractionRepository implements AttractionRepositoryInterface {
    async getOne(id: number): Promise<Attraction> {
        const response = await db.query(
            "SELECT * FROM attraction WHERE id = $1",
            [id],
        );
        if (response.rows.length === 0) {
            throw new Error("Item não enontrado");
        }
        return response.rows[0];
    }

    async getAll(): Promise<Attraction[]> {
        const response = await db.query(
            "SELECT * FROM attraction ORDER BY desire_visit DESC",
        );
        return response.rows;
    }

    async create({
        name,
        description,
        location,
        desire_visit,
    }: Attraction): Promise<void> {
        const { country, state } = location;

        try {
            const responseLocation = await db.query(
                "INSERT INTO location (country, state) VALUES ($1, $2) RETURNING id",
                [country, state],
            );
            const idLocation = responseLocation.rows[0].id;
            const response = await db.query(
                "INSERT INTO attraction (name, description,desire_visit, location_id) VALUES ($1, $2, $3, $4) RETURNING *",
                [name, description, desire_visit, idLocation],
            );

            return response.rows[0];
        } catch (error) {
            logger.error(error);
        }
    }

    async update(attraction: Attraction): Promise<Attraction> {
        const responseLocation = await db.query(
            "UPDATE location SET country = $1, state = $2 WHERE id = $3 RETURNING *",
            [
                attraction.location.country,
                attraction.location.state,
                attraction.location.id,
            ],
        );

        const response = await db.query(
            "UPDATE attraction SET name = $1, description = $2, desire_visit = $3, is_viseted = $4, viseted_at = $5  WHERE id = $6 RETURNING *",
            [
                attraction.name,
                attraction.description,
                attraction.desire_visit,
                attraction.is_viseted,
                attraction.viseted_at,
                attraction.id,
            ],
        );
        attraction = Object.assign(response.rows[0], responseLocation.rows[0]);
        return attraction;
    }

    async delete(attractionId: number): Promise<object> {
        const response = await db.query(
            "SELECT * FROM attraction WHERE id = $1",
            [attractionId],
        );
        let resultLocation = {};

        if(response.rows[0] > 0){
            const locationId = response.rows[0].locationId;

            resultLocation = await db.query(
                "DELETE FROM location WHERE id = $1",
                [locationId],
            )
        }
        ;
        

        const resultAttraction = await db.query(
            "DELETE FROM attraction WHERE id = $1",
            [attractionId],
        );
        logger.info(resultAttraction);

        return { ...resultLocation, ...resultAttraction };
    }
}
