//load dependencies
import express from "express";
import {
    createStudent,
    deleteStudent,
    getAllStudent,
    updateStudent,
} from "../controllers/studentRoutesControllers.js";
import { ageCheckMiddleware } from "../middlewares/ageCheckMiddleware.js";
import { studentPhotoUpload } from "../utils/multerUploader.js";

//make student router

const studentRouter = express.Router();
//get all students
studentRouter.get("/", getAllStudent);
//create a new student
studentRouter.post("/", studentPhotoUpload, ageCheckMiddleware, createStudent);
//update a student data
studentRouter.patch("/:id", updateStudent);
//delete student data
studentRouter.delete("/:id", deleteStudent);

export default studentRouter;
