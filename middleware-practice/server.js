//dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
//environment
dotenv.config();
const PORT = process.env.PORT || 6060;

//initialize Express Application
const app = express();
const adminRouter = express.Router();

//use middlewares
app.use(express.json()); //for json support
app.use(express.urlencoded({ extended: false })); //for url encoding support

//create routers

// create middlewares
const ageCalMiddleWare = (req, res, next) => {
    if (req.body.gender === "male" && req.body.age >= 21) {
        next();
    } else if (req.body.gender === "female" && req.body.age >= 18) {
        next();
    } else {
        throw new Error("Age is not allowed");
    }
};

const authMiddleware = (req, res, next) => {
    if (req.body.age >= 30) {
        next();
    } else {
        throw new Error("admin age need above 29");
    }
};
adminRouter.use(authMiddleware);
// app.use(ageCalMiddleWare);
app.use("/admin", adminRouter);

adminRouter.post("/login", (req, res) => {
    res.status(201).send("login successfully");
});
//make routes
app.get("/", (req, res) => {
    res.status(200).json({
        pageTitle: "Application Home Page",
        status: "success",
    });
});
app.post("/", (req, res) => {
    res.status(201).send(req.body);
});

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err.message);
};
app.use(errorHandler);

//listen on port
app.listen(PORT, () => {
    console.log(` Server listening on ${PORT} `.bgGreen.blue.bold);
});
