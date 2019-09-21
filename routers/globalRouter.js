import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("user home"));
globalRouter.get("/edit", (req, res) => res.send("user edit"));
globalRouter.get("/password", (req, res) => res.send("user password"));

export default globalRouter;