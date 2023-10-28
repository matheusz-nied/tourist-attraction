import { Attraction } from "@src/models/Attraction";

export interface AttractionRepositoryInterface {
    getOne(id: number): Promise<Attraction>;
    getAll(): Promise<Attraction[]>;
    create({ name, description, location, desire_visit }: Attraction): Promise<void>;
    update(attraction: Attraction): Promise<Attraction>;
    delete(attractionId: number): Promise<object>;
}
