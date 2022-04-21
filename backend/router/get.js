import express from "express";
import {authorize} from "../middleware/authorize.js";
import db from "../db.js";

const router = express.Router();

router.get("/users", authorize(), async (req, res) => {
    let users = await db.any('SELECT * FROM usr');
    res.json(users);
});

router.get("/profile/:id_user", async (req, res) => {
    let id_user = req.params.id_user;
    let user = await db.oneOrNone(`SELECT * FROM usr WHERE id_user = '${id_user}'`);
    if (!user) {
        res.json({success: false, message: `* Пользователя нет.`});
        return
    }
    res.json(user);

});

router.get("/me", authorize(true), async (req, res) => {
    res.json(req.user);
});



export default router;
