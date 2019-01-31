import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { port } from "../config/default.json";
import Auth from "./middleware/auth";
import router from "./router";
import db from "./services/database";
import logger from "./services/logging";

// app ...
const app = express();

// Security ...
app.use(helmet());
app.use(cors());

// BodyParser ...
app.use(bodyParser.json());

// Logging ...
global.log = logger;
app.use(morgan("dev"));

// // Database ...
db.connectMongo()
    .then(() => global.log.info("Successfully connected to mongo"))
    .catch((e: Error) => global.log.error(e));

// Middlewares
app.use(Auth.handleToken);

// Routes ...
app.use(router);

app.listen(port || 8080, () => {
    global.log.info(`Listening and serving HTTP on port: ${port}`);
});
