import { Request, Response } from "express";

export const indexPost = async (req: Request, res: Response) => {
    console.log(JSON.stringify(req.body));
    return res.status(200).send({});
};

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.render("index", { title: "Express" });
};
