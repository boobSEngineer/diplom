import express from "express";
import fileMiddleware from "../middleware/file.js"
import db from "../db.js";
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.post("/font", authorize(), fileMiddleware.single("font"), async (req, res) => {
    try {
        let path = req.file.filename;
        let full_name = req.file.originalname;
        let id_user = req.user.id_user;
        let version = "1.0";
        let license = "test.license";
        let about = "test";
        let views = "0";

        await db.none(`INSERT INTO "font" ("path", "full_name", "id_user", "version", "license", "about", "views") VALUES ('${path}','${full_name}',${id_user},'${version}','${license}', '${about}', '${views}')`)
        res.json(null);
    } catch (e) {
        console.log(e);
        res.status(400).json({message: "Upload error"})
    }
})

export default router;
