import express from "express";
import db from "../db.js"

const router = express.Router();

router.post("/by_letter", async (req, res) => {
    const {search_string} = req.body
    let fonts = await db.any(`SELECT * FROM font WHERE LOWER(full_name) LIKE '%${search_string.toLowerCase()}%'`);
    res.json(fonts);
});

export default router;
