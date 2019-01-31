import { Request, Response } from "express";
import User from "../models/user";

class UsersController {
    /**
     * get ...
     * @param req
     * @param res
     */
    public static async get(req: Request, res: Response) {

        try {
            const result = await User.find({ _id: req.session.user._id });
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
            const user = await new User({
                password,
                username,
            }).save();

            req.session.setLogged(true);
            req.session.setUser(user);
            return res.send(user);
        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }

    /**
     * state ...
     * @param req
     * @param res
     */
    public static async state(req: Request, res: Response) {
        res.send(req.session);
    }

    /**
     * login ...
     * @param req
     * @param res
     */
    public static async login(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const user: any = await User.findOne({ username });
            if (!user) {
                return res.status(401).send({ err: "Invalid username!" });
            }

            if (user.password !== password) {
                return res.status(401).send({ err: "Invalid password!" });
            }

            req.session.setLogged(true);
            req.session.setUser(user);
            return res.send(req.session);

        } catch (e) {
            global.log.error(e);
            return res.status(500).send(e);
        }
    }
}

export default UsersController;
