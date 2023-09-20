//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

//load environment variables
const PORT = process.env.PORT || 6060;
//initalize express application
const app = express();

//make routes
app.get("/", (req, res, next) => {
    fs.readFile("./public/index.html", (err, data) => {
        if (err) {
            next(err);
        } else {
            res.status(200).send(data);
        }
    });
});

//404 handler
app.use((req, res, next) => {
    next("Requested page not found");
});
//error handling
app.use((err, req, res, next) => {
    console.log("their was an error");
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("Their was an server side error");
    }
});

//listen on port
app.listen(PORT, () => {
    console.log(` server listening on port ${PORT} `.bgGreen.blue.bold);
});
