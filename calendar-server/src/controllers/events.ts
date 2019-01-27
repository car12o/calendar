import { Request, Response } from "express";
import Event from "../models/event";

class EventsController {
    /**
     * get ...
     * @param req
     * @param res
     */
    public static async get(req: Request, res: Response) {
        try {
            const result = await Event.find({});
            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }

    /**
     * store ...
     * @param req
     * @param res
     */
    public static async store(req: Request, res: Response) {
        const { title, description } = req.body;

        try {
            const result = await new Event({
                date: new Date(),
                description,
                title,
            }).save();

            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }
}

export default EventsController;
