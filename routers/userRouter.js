import express from "express";
import routes from "../routes";
import {
  userDeatil,
  getEditProfile,
  getChangePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.get(routes.userDetail(), userDeatil);

export default userRouter;
