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
        let query = { user: req.session.user._id };
        if (id) {
            query = Object.assign({}, query, { _id: id });
        }

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
        const endDate = new Date(end);
        endDate.setHours(endDate.getHours() + 2);

        try {
            await new Event({
                description,
                end: endDate,
                start: new Date(start),
                title,
                user: req.session.user._id,
            }).save();

            const result = await Event.find({ user: req.session.user._id });
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
        const { body } = req;

        if (body.end) {
            body.end = new Date(body.end);
            body.end.setHours(body.end.getHours() + 2);
        }

        try {
            await Event.updateOne(
                { _id: id, user: req.session.user._id },
                Object.assign({}, req.body, { updatedAt: new Date() })
            );

            const result = await Event.find({ user: req.session.user._id });
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
            await Event.deleteOne({ _id: id, user: req.session.user._id });

            const result = await Event.find({ user: req.session.user._id });
            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }
}

export default EventsController;
