import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "photo" && req.originalUrl === "/student") {
            cb(null, path.resolve("public/student/photo"));
        } else if (file.fieldname === "cv" && req.originalUrl === "/student") {
            cb(null, path.resolve("public/student/cv"));
        }
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        const filename =
            file.fieldname.toLowerCase() +
            "_" +
            req.body.name.split(" ").join("_").toLowerCase() +
            "_" +
            file.originalname.replace(extname, "").split(" ").join("_").toLowerCase() +
            "_" +
            Date.now().toString() +
            "_" +
            Math.floor(Math.random() * 100000);
        cb(null, filename + extname);
    },
});

export const uploadStudentPhoto = multer({
    storage: storage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        if (file.fieldname === "photo") {
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
    { name: "photo", maxCount: 1 },
    { name: "cv", maxCount: 1 },
]);
