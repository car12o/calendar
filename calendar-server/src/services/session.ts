import uuidv4 from "uuid/v4";
import db from "../services/database";

class Session {
    public token: string = "";
    public logged: boolean = false;
    public user: object = {};

    /**
     * init ...
     * @param authToken
     */
    public async init(authToken: string = "") {
        try {
            const value = await db.redis.get(authToken);
            const { token, logged, user } = JSON.parse(value);
            this.token = token;
            this.logged = logged;
            this.user = user;
            return this;
        } catch (e) {
            this.token = uuidv4();
            this.logged = false;
            db.redis.set(this.token, JSON.stringify(this));
            return this;
        }
    }

    /**
     * setLogged ...
     * @param value
     */
    public setLogged(value: boolean = false) {
        this.logged = value;
        db.redis.set(this.token, JSON.stringify(this));
    }

    /**
     * setUser ...
     * @param value
     */
    public setUser(value: IUser) {
        this.user = value;
        db.redis.set(this.token, JSON.stringify(this));
    }
}

export default Session;
