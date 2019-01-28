import express from "express";
import EventsController from "../controllers/events";
import UsersController from "../controllers/users";

const router = express.Router();
const events = express.Router();
const users = express.Router();

// events ...
events.get("", EventsController.get);
events.get("/:id", EventsController.get);
events.post("", EventsController.store);

// events ...
users.get("", UsersController.get);
users.get("/:id", UsersController.get);
users.post("", UsersController.store);

// router ...
router.use("/events", events);
router.use("/users", users);

export default router;
