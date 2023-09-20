import express from "express";
import { getHomePage } from "../controllers/PublicRouteControllers.js";

const publicRouter = express.Router();

publicRouter.get("/", getHomePage);

export default publicRouter;
