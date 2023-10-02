import { AttractionController } from "@src/controllers/attractionController";
import { Request, Response, Router } from "express";

const attractionRouter = Router();
const attractionController = new AttractionController();

attractionRouter.get("/get/:id", (req: Request, res: Response) => {
res.send("ola")
});
attractionRouter.get("/getAll", attractionController.getAll);
attractionRouter.post("/", attractionController.create);

attractionRouter.delete("/delete", (req: Request, res: Response) => {
    return;
});

attractionRouter.put("/update", (req: Request, res: Response) => {
    return;
});

export default attractionRouter;
