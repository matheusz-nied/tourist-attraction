import User from "./User";

export interface Location {
    id?: string;
    country: string;
    state: string;
}
export interface Attraction {
    id?: string;
    //user: User;
    name: string;
    description: string;
    is_viseted?: boolean;
    created_at?: Date;
    viseted_at?: Date;
    location: Location;
    desire_visit: number;
}
