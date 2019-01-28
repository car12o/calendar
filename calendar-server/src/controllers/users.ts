import { Request, Response } from "express";
import User from "../models/user";

class UsersController {
    /**
     * get ...
     * @param req
     * @param res
     */
    public static async get(req: Request, res: Response) {
        const { id } = req.params;
        const query = id ? { _id: id } : {};

        try {
            const result = await User.find(query);
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
        const { username, password } = req.body;

        try {
            const result = await new User({
                password,
                username,
            }).save();

            return res.send(result);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }
}

export default UsersController;
