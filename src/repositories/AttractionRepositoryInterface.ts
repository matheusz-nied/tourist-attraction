import { Attraction } from "@src/models/Attraction";

export interface AttractionRepositoryInterface {
    getOne(): Promise<Attraction>;
    getAll(): Promise<Attraction[]>;
    create({
        name,
        description,
        location,
        desire_visit,
    }: Attraction): Promise<Attraction>;
    update(): Promise<Attraction>;
    delete(): Promise<Attraction>;
}