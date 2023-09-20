//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

//load environment variables
const PORT = process.env.PORT || 6060;
//initalize express application
const app = express();
//use bult in middleware for supporting
app.use(express.json()); // for json parsing
app.use(express.urlencoded({ extended: false })); // for url encoding

//make middleware
const ageCheckMiddleware = (req, res, next) => {
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
//make routes

studentRouter.get("/", (req, res) => {
    res.status(200).send("Student Home Page");
});
studentRouter.post("/", ageCheckMiddleware, (req, res) => {
    res.status(200).send(req.body);

    //email configuration
    const trasport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
    trasport.sendMail({
        from: `devripon <${process.env.MAIL_USER}>`,
        to: req.body.email,
        subject: "Verification email",
        text: "This is a testing verification email",
    });
});

//<!-- ==========  End From Here ========== -->//

//404 error handler
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
//application error handler
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("Their was an unexpected error");
    }
});
//server listening on port
app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT} `.bgGreen.blue.bold);
});
