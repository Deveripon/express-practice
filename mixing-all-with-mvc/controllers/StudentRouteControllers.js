import { sendVerificationEmail } from "../email/VerificationEmail.js";
import bulkmessage from "bulkmessage";
import sendSms from "bulkmessage";

export const getAllStudent = (req, res) => {
    res.status(200).send("Showing all students");
};

export const createNewStudent = (req, res) => {
    res.status(201).send(req.body);
    sendVerificationEmail(req, res);
    sendSms(
        "rcvhoqrAmkxEWrfyYIKQ",
        "8809617612985",
        req.body.cell,
        `Hi ${req.body.name} you are welcome to devripon.io. please confirm your email address`
    );
};
