import { sendVerificationEmail } from "../email/verificationEmail.js";
import sendSms from "bulkmessage";
import fs from "fs";
import { getDataFromJsonDB } from "../utils/databaseOperation.js";

//get all student
export const getAllStudent = (req, res) => {
    res.status(200).json({
        status: "200",
        message: "All Students Data",
    });
};

//create a new student
export const createStudent = (req, res) => {
    res.status(200).send(req.body);
    /* sendVerificationEmail(req, res); */
    /* sendSms("rcvhoqrAmkxEWrfyYIKQ", "8809617612985", req.body.cell, "this is testing message"); */
};

//update student information
export const updateStudent = (req, res) => {
    res.status(200).json({
        status: "200",
        message: "Student data updated successfully",
    });
};

//delete a student
export const deleteStudent = (req, res) => {
    res.status(200).json({
        status: "200",
        message: "Student data deleted successfully",
    });
};
