//loade dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import publicRouter from "./routes/PublicRoutes.js";
import studentRouter from "./routes/StudentRoutes.js";
//config dotenv
dotenv.config();
//load environment variables
const PORT = process.env.PORT || 6060;
//Initialize Express application
const app = express();
//use built-in middleware for supporting
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//<!-- ==========  Main Functionality From Here ========== -->//

app.use(publicRouter);
//student routes
app.use("/student", studentRouter);

//<!-- ========== Main Functionality End From Here ========== -->//

//404 ERROR HANDLER
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
//application error handler
app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send("There was an Server side error");
    }
});
//server listening on port
app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT} `.bgGreen.blue.bold);
});
