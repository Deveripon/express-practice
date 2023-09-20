//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
dotenv.config();

//load environment variables
const PORT = process.env.PORT || 6060;

//initialize express app
const app = express();
//built-in-middleware-support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//make routes
app.route("/")
    .get((req, res) => {
        res.status(200).send("Application Home Page");
    })
    .post((req, res) => {
        // throw new Error("error while posting");
        res.status(201).send(req.body);
    });

//make student router
const studentRouter = express.Router();
app.use("/student", studentRouter);

//make age check middleware
const ageCheckMiddleware = (req, res, next) => {
    if (req.body.gender === "male" && req.body.age >= 21) {
        next();
    } else if (req.body.gender === "female" && req.body.age >= 18) {
        next();
    } else {
        throw new Error("Age is Not Allowed");
    }
};

//upload photo on multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "image") {
            cb(null, path.resolve("public/image"));
        } else if (file.fieldname === "cv") {
            cb(null, path.resolve("public/cv"));
        }
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename =
            file.fieldname.toLowerCase() +
            "_" +
            req.body.name.split(" ").join("_").toLowerCase() +
            "_" +
            file.originalname.replace(ext, "").split(" ").join("_").toLowerCase() +
            "_" +
            Date.now().toString() +
            "_" +
            Math.floor(Math.random() * 100000);
        cb(null, filename + ext);
    },
});

const StudentPhotoUpload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000, //1 mb
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "image") {
            if (
                file.mimetype === "image/jpeg" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/png"
            ) {
                cb(null, true);
            } else {
                cb(new Error(" Invalid file type"));
            }
        } else if (file.fieldname === "cv") {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            } else {
                cb(new Error(" Invalid file type"));
            }
        }
    },
}).fields([
    { name: "image", maxCount: 1 },
    { name: "cv", maxCount: 1 },
]);

//make routes
studentRouter.get("/", (req, res) => {
    res.status(200).send("Student Home Page");
});
studentRouter.post("/", StudentPhotoUpload, (req, res) => {
    res.status(201).send(req.body);
});

//404 error handling
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

//application error handler
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(404).send(err);
    } else {
        if (err.message) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send("There was an error");
        }
    }
});

//listen on port
app.listen(PORT, () => {
    console.log(` server listening on ${PORT} `.bgGreen.blue.bold);
});
