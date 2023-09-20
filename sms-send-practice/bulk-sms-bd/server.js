//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import axios from "axios";
import bulkmessage from "bulkmessage";
import sendSms from "bulkmessage";
//config dotenv
dotenv.config();
//load environment variables
const PORT = process.env.PORT || 6060;

//express app initialization
const app = express();
//use builtin express middleware
app.use(express.json()); // for json parsing
app.use(express.urlencoded({ extended: false })); // for url encoding

//age check middleware
const ageCheckMiddleWare = (req, res, next) => {
    if (req.body.gender === "male" && req.body.age >= 21) {
        next();
    } else if (req.body.gender === "female" && req.body.age >= 18) {
        next();
    } else {
        throw new Error("Age is not allowed");
    }
};

//<!-- ==========  Start From Here ========== -->//
//make application public route
app.get("/", (req, res) => {
    res.status(200).send("Application Home Page");
});

//make student router
const studentRouter = express.Router();
app.use("/student", studentRouter);
//make student routes
studentRouter.get("/", (req, res) => {
    res.status(200).send("Student Home Page");
});
studentRouter.post("/", ageCheckMiddleWare, (req, res) => {
    res.status(201).send(req.body);
    //email configuration
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    transport.sendMail({
        from: `devripon <${process.env.MAIL_USER}>`,
        to: req.body.email,
        subject: "Verification Email",
        text: "This is a testing email",
    });
    sendSms("rcvhoqrAmkxEWrfyYIKQ", "8809617612985", req.body.cell, "Test Message");
});

//<!-- ==========  End From Here ========== -->//

//make 404 error handler
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
//make application error handler middleware
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("Their was an unknown error");
    }
});

//server listening on port
app.listen(PORT, () => {
    console.log(` server listening on port ${PORT} `.bgGreen.blue.bold);
});
