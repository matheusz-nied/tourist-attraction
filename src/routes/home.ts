import { Request, Response, Router } from "express";
const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response) => {
    res.render('pages/index', {tittle: 'Home'});
});

export default homeRouter;
