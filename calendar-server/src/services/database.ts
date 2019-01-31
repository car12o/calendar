import mongoose from "mongoose";
import redis from "redis";
import { promisify } from "util";
import { database } from "../../config/default.json";

const client = redis.createClient({
    host: database.redis.host,
    port: database.redis.port,
});

export = {
    connectMongo: () => mongoose.connect(
        `mongodb://${database.mongo.user}:${database.mongo.password}@${database.mongo.host}:\
            ${database.mongo.port}/${database.mongo.name}?authSource=admin`, {
            reconnectTries: 30,
            socketTimeoutMS: 0,
            useNewUrlParser: true,
        },
    ),
    redis: {
        get: (key: string) => {
            const getAsync = promisify(client.get).bind(client);
            return getAsync(key);
        },
        set: (key: string, value: string) => client.set(key, value),
    },
};
