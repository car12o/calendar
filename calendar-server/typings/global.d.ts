declare namespace NodeJS {
    interface Global {
        log: any;
    }
}

declare namespace Express {
    export interface Request {
        session: ISession;
    }
}

interface ISession {
    token: string;
    logged: boolean;
    user: IUser;
    setLogged: Function;
    setUser: Function;
}

interface IUser {
    _id: string;
    createdAt: Date;
    password: string;
    updatedAt: Date;
    username: string;
}
