//dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
//environment variables
const PORT = process.env.PORT || 6060;
//initialize express application
const app = express();
//use built-in express middleware
app.use(express.json()); //for json support
app.use(express.urlencoded({ extended: false })); //for url encoding support

//make some middleware
const logger = (req, res, next) => {
    console.log(
        `logging on method: ${req.method} , path : ${req.path} , protocol: ${req.protocol} , url : ${req.originalUrl} , IP : ${req.ip}`
    );
    next();
};

//make router
const adminRouter = express.Router();
adminRouter.use(logger);
app.use("/admin", adminRouter);

adminRouter.param("id", (req, res, next) => {
    console.log("use is parameter");
    next();
});

//router.route()
adminRouter
    .route("/about/:id")
    .all((req, res, next) => {
        console.log("heating admin about route");
        console.log("id used is parameter");
        next();
    })
    .get((req, res) => {
        res.status(200).send("admin about route");
    })
    .post((req, res) => {
        res.status(201).send("admin created");
    });

//use middleware

//make some routes
app.get("/", (req, res) => {
    res.status(200).json({
        pageTitle: "application home page",
    });
});

app.post("/", (req, res) => {
    res.status(201).send(req.body);
});

//listen on port
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`.bgGreen.blue.bold);
});
