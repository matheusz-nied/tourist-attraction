import { Request, Response } from "express";
import { Attraction } from "@src/models/Attraction";
import { AttractionRepository } from "@src/repositories/AttractionRepository";
export class AttractionController {
    public async create(req: Request, res: Response): Promise<void> {
        const attraction: Attraction = {
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            desire_visit: req.body.desire_visit,
        };

        const attractionRepository = new AttractionRepository();
        attractionRepository.create(attraction);

        const attractionFormated = formatAttractionToRender(attraction);

        res.render("pages/attractions/index", {
            attraction: attractionFormated,
        });
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        const attractionRepository = new AttractionRepository();
        const attractions = await attractionRepository.getAll();
        res.send( attractions)
    }
}

function formatAttractionToRender(attraction: Attraction) {
    console.log(attraction);
    const attractionToRender = {
        name: attraction.name,
        description: attraction.description,
        country: attraction.location.country,
        state: attraction.location.state,
        desire_visit: attraction.desire_visit,
    };

    return attractionToRender;
}
