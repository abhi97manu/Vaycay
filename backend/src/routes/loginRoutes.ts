import {Router} from "express";
import { loginController } from "../controllers/loginController.js";
export const loginRoutes = Router();

loginRoutes.post("/", loginController)
