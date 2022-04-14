import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.post("/view", async (req, res) => {
    let {id_font} = req.body;
    if (id_font) {
        await db.none(`UPDATE font SET views = views + 1 WHERE id_font = ${id_font}`);
        res.json({success: true});
    } else {
        res.json({success: false});
    }


});


export default router;
