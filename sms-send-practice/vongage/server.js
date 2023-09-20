//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { Vonage } from "@vonage/server-sdk";

const vonage = new Vonage({
    apiKey: "56990ff6",
    apiSecret: "fQUcM7BW45NmyIcC",
});

async function sendSMS(to, from, text) {
    await vonage.sms
        .send({ to, from, text })
        .then((resp) => {
            console.log("Message sent successfully");
            console.log(resp);
        })
        .catch((err) => {
            console.log("There was an error sending the messages.");
            console.error(err);
        });
}

//config dotenv
dotenv.config();
//load environment variables
const PORT = process.env.PORT || 6060;
//express application initialization
const app = express();
//Use bultin Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//make agecal middleware
const agecalMiddleware = (req, res, next) => {
    if (req.body.gender === "male" && req.body.age >= 21) {
        next();
    } else if (req.body.gender === "female" && req.body.age >= 18) {
        next();
    } else {
        throw new Error("Age id not allowed");
    }
};

//<!-- ==========  Start From Here ========== -->//

//make public route
app.get("/", (req, res) => {
    res.status(200).send("Application Home Page");
});

//make studet Router
const studentRouter = express.Router();
app.use("/student", studentRouter);

studentRouter.get("/", (req, res) => {
    res.status(200).send("Student Home Page");
});

studentRouter.post("/", agecalMiddleware, (req, res) => {
    res.status(201).send(req.body);
    //mail configuration
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
        subject: "verified email",
        text: "this is a verified email",
    });
    sendSMS("+8801913509868", "Vonage APIs", "Testing massege from vongage");
});

//<!-- ==========  End From Here ========== -->//

//make 404 error handler
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

//make error handler
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("There was an error");
    }
});

//server listening on port
app.listen(PORT, () => {
    console.log(` server listening on port ${PORT} `.bgGreen.blue.bold);
});
