import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.get("/by_views", async (req, res) => {
    let fonts = await db.any(`SELECT * FROM font ORDER BY views DESC`);
    res.json(fonts);
});

router.get("/by_likes", async (req, res) => {
    let fonts = await db.any(`SELECT id_font, count(*) id_user FROM likes GROUP BY id_font ORDER BY id_user DESC`)
    res.json(fonts);
});

router.get("/by_data", async (req, res) => {
    let fonts = await db.any(`SELECT * FROM font ORDER BY id_font DESC`);
    res.json(fonts);
});


export default router;
