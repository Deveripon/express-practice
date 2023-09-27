//load dependencies
import express from "express";
import {
    showAllProductPage,
    showProductAddPage,
} from "../controllers/ejsProductPageControllers.js";

//create router
const productRouter = express.Router();

//ejs page routes
productRouter.get("/", showAllProductPage);
productRouter.get("/add-new", showProductAddPage);

export default productRouter;
