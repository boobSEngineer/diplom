import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.get("/gallery", async (req, res) => {
    let fonts = await db.any('SELECT * FROM font');
    res.json(fonts);
});

router.get("/user_fonts/:id_user", async (req, res) => {
    let {id_user} = req.params;
    let fonts = await db.any(`SELECT * FROM font WHERE id_user = ${id_user}`);
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

router.get("/font/:id_font",async (req, res) => {
    let id_font = req.params.id_font;
    let font = await db.oneOrNone(`SELECT * FROM font WHERE id_font = '${id_font}'`);
    if (!font) {
        res.json({success: false, message: `* Шрифт отсутствует.`});
        return
    }
    res.json(font);

});

export default router;
