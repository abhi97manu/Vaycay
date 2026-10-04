import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { adminRoutes } from "./routes/adminRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import {AIassist} from "./controllers/AIController.js";
import { authHandler } from "./middleware/authHandler.js";
import { loginRoutes } from "./routes/loginRoutes.js";

export const app = express();

const versionRoute = env.versionRoute;

app.use(
  cors({
    origin: env.clientOrigin
  })
);
app.use(express.json());

app.get(`${versionRoute}/health`, (_request, response) => {
  response.json({ status: "ok" });
});


app.use(`${versionRoute}/auth/login`, loginRoutes);
app.use(`${versionRoute}/admin`, adminRoutes);
app.get(`${versionRoute}/ai_req`, AIassist);
app.use(errorHandler);
