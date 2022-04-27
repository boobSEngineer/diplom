import express from "express";
import db from "../db.js"
import {makeFontsQuery} from "./fonts.js";
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.get("/by", authorize(true), async (req, res) => {
    let {sort, search, liked, uploaded} = req.query
    let fonts = null;
    let order_by = (params) => {
        return `ORDER BY ${params} DESC`
    };
    let condition = [];
    if (req.user && req.user.id_user) {
        if (liked) {
            condition.push(`likes.id_user = ${req.user.id_user}`)
        }
        if (uploaded) {
            condition.push(`font.id_user = ${req.user.id_user}`)
        }
    }
    if (search) {
        condition.push(`LOWER(full_name) LIKE '%${search.toLowerCase()}%' `)
    }
    if (condition.length <= 0) {
        condition = null;
    } else {
        condition = `WHERE ` + condition.join(" AND ");
    }
    switch (sort) {
        case "views":
            fonts = await db.any(makeFontsQuery({
                current_id_user: req.user ? req.user.id_user : null,
                where_condition: condition,
                order: order_by(`views`)
            }));
            break
        case "likes":
            fonts = await db.any(makeFontsQuery({
                current_id_user: req.user ? req.user.id_user : null,
                where_condition: condition,
                order: order_by(`like_counter`)
            }));
            break
        case "data":
            fonts = await db.any(makeFontsQuery({
                current_id_user: req.user ? req.user.id_user : null,
                where_condition: condition,
                order: order_by(`font.id_font`)
            }));
            break;
        default:
            fonts = await db.any(makeFontsQuery({
                current_id_user: req.user ? req.user.id_user : null,
                where_condition: condition
            }));
    }
    res.json(fonts)

});


export default router;
