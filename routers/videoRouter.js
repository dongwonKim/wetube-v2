import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("user home"));
videoRouter.get("/edit", (req, res) => res.send("user edit"));
videoRouter.get("/password", (req, res) => res.send("user password"));

export default videoRouter;