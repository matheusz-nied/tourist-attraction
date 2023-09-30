import { Request, Response, Router } from "express";
const tasksRouter = Router();

tasksRouter.get("/", (req: Request, res: Response) => {
    res.render('pages/index', {tittle: 'Cleitin'});
});

export default tasksRouter;
