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
        res.send(attractions);
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const attractionRepository = new AttractionRepository();
        const attractionId = parseInt(req.params.id);
        const attraction = await attractionRepository.getOne(attractionId);
        res.send(attraction);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const attractionId = parseInt(req.params.id);
        let attraction: Attraction = {
            id: attractionId,
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            desire_visit: req.body.desire_visit,
            is_viseted: req.body.is_viseted,
            viseted_at: req.body.viseted_at,
        };
        const attractionRepository = new AttractionRepository();
        attraction = await attractionRepository.update(attraction);
        res.send(attraction);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const attractionId = parseInt(req.params.id);

        const attractionRepository = new AttractionRepository();
        const result = attractionRepository.delete(attractionId);

        res.send(result);
    }
}

function formatAttractionToRender(attraction: Attraction) {
    const attractionToRender = {
        name: attraction.name,
        description: attraction.description,
        country: attraction.location.country,
        state: attraction.location.state,
        desire_visit: attraction.desire_visit,
    };

    return attractionToRender;
}
