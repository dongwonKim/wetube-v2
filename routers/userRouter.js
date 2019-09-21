import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("user home"));
userRouter.get(routes.userDetail, (req, res) => res.send("user userDetail"));
userRouter.get(routes.editProfile, (req, res) => res.send("user editProfile"));
userRouter.get(routes.changePassword, (req, res) => res.send("user changePassword"));

export default userRouter;