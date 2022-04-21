import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.get("/by", async (req, res) => {
    let {sort, search} = req.query
    let fonts = null;
    let likes_join = `select font.*, count(likes.id_user) as like_counter  from (font left join likes on font.id_font = likes.id_font) group by font.id_font`
    let condition = "";
    if (search) {
        condition = `WHERE LOWER(full_name) LIKE '%${search.toLowerCase()}%' `
    }
    switch (sort) {
        case "views":
            fonts = await db.any(`select font.*, count(likes.id_user) as like_counter  from (font left join likes on font.id_font = likes.id_font) ${condition} group by font.id_font  ORDER BY views DESC`);
            break
        case "likes":
            fonts = await db.any(` select font.*, count(likes.id_user) as like_counter  from (font left join likes on font.id_font = likes.id_font) ${condition} group by font.id_font  ORDER BY like_counter DESC`)
            break
        case "data":
            fonts = await db.any(`select font.*, count(likes.id_user) as like_counter  from (font left join likes on font.id_font = likes.id_font) ${condition} group by font.id_font  ORDER BY font.id_font DESC`);
            break
        default:
            fonts = await db.any(`select font.*, count(likes.id_user) as like_counter  from (font left join likes on font.id_font = likes.id_font) ${condition} group by font.id_font `);
    }
    res.json(fonts)
});



export default router;
