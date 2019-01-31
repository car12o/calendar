import {
    NextFunction,
    Request,
    RequestHandler,
    Response,
} from "express";
import Session from "../services/session";

class Auth {
    /**
     * handleToken ...
     * @param req
     * @param res
     * @param next
     */
    public static async handleToken(req: Request, res: Response, next: NextFunction) {
        const token = req.get("Token");
        req.session = await new Session().init(token) as ISession;
        res.set("Token", req.session.token);
        res.set("Access-Control-Expose-Headers", "Content-Type, Token, X-Requested-With");

        next();
    }

    /**
     * authorization ...
     * @param req
     * @param res
     * @param next
     */
    public static authorization(req: Request, res: Response, next: NextFunction) {
        if (!req.session.logged) {
            return res.status(401).send({ err: "Unauthorized!" });
        }

        next();
    }
}

export default Auth;
