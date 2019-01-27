import mongoose from "mongoose";

interface IDatabase {
    user: string;
    password: string;
    host: string;
    port: number;
    name: string;
}

export default {
    connect: (database: IDatabase) => mongoose.connect(
        `mongodb://${database.user}:${database.password}@${database.host}:\
            ${database.port}/${database.name}?authSource=admin`, {
            reconnectTries: 30,
            socketTimeoutMS: 0,
            useNewUrlParser: true,
        },
    ),
};
