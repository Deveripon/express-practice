import express from "express";
import { createNewStudent, getAllStudent } from "../controllers/StudentRouteControllers.js";
import { ageCheckMiddleWare } from "../middleware/ageCheckMiddleWare.js";
import { uploadStudentPhoto } from "../utils/fileUploader.js";

//make student router
const studentRouter = express.Router();
studentRouter.get("/", getAllStudent);
studentRouter.post("/", uploadStudentPhoto, ageCheckMiddleWare, createNewStudent);

export default studentRouter;
