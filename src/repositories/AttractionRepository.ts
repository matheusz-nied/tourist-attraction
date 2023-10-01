import { Attraction } from "@src/models/Attraction";
import { AttractionRepositoryInterface } from "./AttractionRepositoryInterface";
import { db } from "@src/database/database";

export class AttractionRepository implements AttractionRepositoryInterface {
    getOne(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }

    getAll(): Promise<Attraction[]> {
        return new Promise<Attraction[]>((resolve, reject) => {});
    }

    async create({
        name,
        description,
        location,
        desire_visit,
    }: Attraction): Promise<Attraction> {
        const { country, state } = location;
        const locationResult = await db.query(
            "INSERT INTO location (country, state) VALUES ($1, $2)",
            [country, state],
        );
        const attractionResult = await db.query(
            "INSERT INTO attraction (name, description,desire_visit, location_id) VALUES ($1, $2, $3, $4)",
            [name, description, desire_visit, 2],
        );
        return new Promise<Attraction>((resolve, reject) => {});
    }

    update(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }

    delete(): Promise<Attraction> {
        return new Promise<Attraction>((resolve, reject) => {});
    }
}
