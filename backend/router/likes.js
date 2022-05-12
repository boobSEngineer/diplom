import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.post("/like", authorize(), async (req, res) => {
    try {
        let counter_like = null;
        let {id_font} = req.body;
        let {id_user} = req.user;
        let liked = await db.oneOrNone(`SELECT * FROM likes WHERE (id_user =  ${id_user} AND id_font =  ${id_font})`);
        if (liked) {
            await db.none(`UPDATE usr SET like_counter = like_counter - 1 WHERE id_user = ${id_user}`); //id юзера отсылать не нужно
            await db.none(`DELETE FROM "likes" WHERE "id_font" = ${id_font} AND "id_user" = ${id_user}`);
            counter_like = await db.oneOrNone(`select COUNT(id_user) as counter_likes from likes where id_font = ${id_font} group by id_font `);
            if (counter_like) {
                res.json({success: true, is_liked: false, message: "Unlike works", count: counter_like.counter_likes})
            } else {
                res.json({success: true, is_liked: false, message: "Unlike works", count: "0"})
            }

        } else {
            await db.none(`UPDATE usr SET like_counter = like_counter + 1 WHERE id_user = ${id_user}`); //id юзера отсылать не нужно
            await db.none(`INSERT INTO likes(id_user, id_font) VALUES(${id_user}, ${id_font})`);
            counter_like = await db.oneOrNone(`select COUNT(id_user) as counter_likes from likes where id_font = ${id_font} group by id_font `);
            if (counter_like) {
                res.json({success: true, is_liked: true, message: "Unlike works", count: counter_like.counter_likes})
            } else {
                res.json({success: true, is_liked: true, message: "Unlike works", count: "0"})
            }
        }
    } catch (e) {
        console.log(e)
        res.json({success: false, message: "Like not working"});
    }

});


export default router;
