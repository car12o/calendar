import { Request, Response } from "express";
import Event from "../models/event";

class EventsController {
    /**
     * get ...
     * @param req
     * @param res
     */
    public static async get(req: Request, res: Response) {
        const { id } = req.params;
        const query = id ? { _id: id } : {};

        try {
            const result = await Event.find(query);
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
        const { title, description, start, end } = req.body;

        try {
            await new Event({
                description,
                end: new Date(end),
                start: new Date(start),
                title,
            }).save();

            const result = await Event.find({});
            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }

    /**
     * update ...
     * @param req
     * @param res
     */
    public static async update(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Event.updateOne(
                { _id: id },
                Object.assign({}, req.body, { updatedAt: new Date() })
            );

            const result = await Event.find({});
            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }

    /**
     * delete ...
     * @param req
     * @param res
     */
    public static async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Event.deleteOne({ _id: id });

            const result = await Event.find({});
            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }
}

export default EventsController;
