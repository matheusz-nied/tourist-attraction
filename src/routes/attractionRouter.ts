import { AttractionController } from "@src/controllers/attractionController";
import { Request, Response, Router } from "express";

const attractionRouter = Router();
const attractionController = new AttractionController();

attractionRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/attractions/index", { tittle: "Attractions" });
});
attractionRouter.get("/getAll:id", (req: Request, res: Response) => {
    return;
});
attractionRouter.post("/", attractionController.create);

attractionRouter.delete("/delete", (req: Request, res: Response) => {
    return;
});

attractionRouter.put("/update", (req: Request, res: Response) => {
    return;
});

export default attractionRouter;
