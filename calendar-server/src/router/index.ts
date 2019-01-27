import express from "express";
import EventsController from "../controllers/events";

const router = express.Router();
const events = express.Router();

// events ...
events.get("", EventsController.get);
events.post("", EventsController.store);

// router ...
router.use("/events", events);

export default router;
