import { Request, Response, Router } from "express";
const tasksRouter = Router();

tasksRouter.get("/", (req: Request, res: Response) => {
    res.render("pages/tasks/index", { tittle: "Tasks" });
});
tasksRouter.get("/getAll:id", (req: Request, res: Response) => {
    return;
});
tasksRouter.post("/create", (req: Request, res: Response) => {
    return;
});

tasksRouter.delete("/delete", (req: Request, res: Response) => {
    return;
});

tasksRouter.put("/update", (req: Request, res: Response) => {
    return;
});

export default tasksRouter;
