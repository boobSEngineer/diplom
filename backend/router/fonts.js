import express from "express";
import db from "../db.js"

const router = express.Router();

router.get("/gallery", async (req, res) => {
    let fonts = await db.any('SELECT * FROM font');
    res.json(fonts);
});

router.post("/current_fonts", async (req, res) => {
    let {id_user} = req.body;
    let fonts = await db.any(`SELECT * FROM font WHERE id_user = ${id_user}`);
    res.json(fonts);
});


export default router;
