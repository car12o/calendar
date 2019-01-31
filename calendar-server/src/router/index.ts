import express from "express";
import EventsController from "../controllers/events";
import UsersController from "../controllers/users";
import Auth from "../middleware/auth";

const router = express.Router();
const events = express.Router();
const users = express.Router();

// events ...
events.get("", EventsController.get);
events.get("/:id", EventsController.get);
events.post("", EventsController.store);
events.patch("/:id", EventsController.update);
events.delete("/:id", EventsController.delete);

// users ...
users.get("", Auth.authorization, UsersController.get);
users.get("/:id", Auth.authorization, UsersController.get);
users.post("", UsersController.store);

// auth ...
router.post("/login", UsersController.login);
router.get("/state", UsersController.state);

// router ...
router.use("/events", Auth.authorization, events);
router.use("/users", users);

export default router;
