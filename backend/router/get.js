import express from "express";
import {authorize} from "../middleware/authorize.js";
import db from "../db.js";

const router = express.Router();

router.get("/users", authorize(), async (req, res) => {
    let users = await db.any('SELECT * FROM usr');
    res.json(users);
});

router.get("/me", authorize(true), async (req, res) => {
    res.json(req.user);
});


export default router;
