import { AttractionController } from "@src/controllers/attractionController";
import { Request, Response, Router } from "express";

const attractionRouter = Router();
const attractionController = new AttractionController();

attractionRouter.get("/:id",  attractionController.getOne);
attractionRouter.get("/", attractionController.getAll);
attractionRouter.post("/", attractionController.create);

attractionRouter.delete("/",attractionController.delete);

attractionRouter.put("/:id", attractionController.update);

export default attractionRouter;
