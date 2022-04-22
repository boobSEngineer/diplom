import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

export const makeFontsQuery = (params) => {
    const {
        current_id_user,
        where_condition,
        order
    } = params;

    let query = `select font.*`;
    query += `, count(likes.id_user) as like_counter`
    if (current_id_user != null) {
        query += `, max(case likes.id_user when ${current_id_user} then 1 else 0 end) = 1 as is_liked`
    } else {
        query += `, false as is_liked`
    }
    query += ` from (font left join likes on font.id_font = likes.id_font) ${where_condition || ""} group by font.id_font`
    if (order) {
        query += ` ${order}`
    }
    return query;
}

router.get("/gallery", authorize(true), async (req, res) => {
    if (req.user) {
        let {id_user} = req.user;
        let fonts = await db.any(makeFontsQuery({current_id_user: id_user}));
        res.json(fonts);
    } else {
        let fonts = await db.any(makeFontsQuery({}));
        res.json(fonts);
    }
})

router.get("/user_fonts/:id_user", async (req, res) => {
    let {id_user} = req.params;
    let fonts = await db.any(makeFontsQuery({
        current_id_user: id_user,
        where_condition: `WHERE font.id_user = ${id_user}`
    }));
    res.json(fonts);
});

router.post("/delete_font", authorize(), async (req, res) => {
    try {
        let {id_font} = req.body;
        let {id_user} = req.user;
        await db.none(`DELETE FROM "font" WHERE "id_font" = ${id_font} AND "id_user" = ${id_user}`);
        res.json({success: true, message: "no error (success)"});
    } catch (e) {
        console.log(e)
        res.json({success: false, message: "Delete not working"});
    }
});

router.get("/font/:id_font",authorize(true), async (req, res) => {
    let id_font = req.params.id_font;
    let font = await db.oneOrNone(makeFontsQuery({
        current_id_user: req.user ? req.user.id_user : null,
        where_condition: `WHERE font.id_font = ${id_font}`
    }));
    if (!font) {
        res.json({success: false, message: `* Шрифт отсутствует.`});
        return
    }
    res.json(font);
});

export default router;
