import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.get("/by", async (req, res) => {
    let {sort, search} = req.query
    let fonts = null;
    let condition = "";
    if (search) {
        condition = `WHERE LOWER(full_name) LIKE '%${search.toLowerCase()}%'`
    }
    switch (sort) {
        case "views":
            fonts = await db.any(`SELECT * FROM font ${condition} ORDER BY views DESC`);
            break
        case "likes":
            fonts = await db.any(`SELECT id_font, count(*) id_user FROM likes ${condition} GROUP BY id_font ORDER BY id_user DESC`)
            break
        case "data":
            fonts = await db.any(`SELECT * FROM font ${condition} ORDER BY id_font DESC`);
            break
        default:
            fonts = await db.any(`SELECT * FROM font ${condition}`);
    }
    res.json(fonts)
});



export default router;
