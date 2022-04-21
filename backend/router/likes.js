import express from "express";
import db from "../db.js"
import {authorize} from "../middleware/authorize.js";

const router = express.Router();

router.post("/like", authorize(), async (req, res) => {
    try {
        let {id_font} = req.body;
        let {id_user} = req.user;
        let liked = await db.oneOrNone(`SELECT * FROM likes WHERE (id_user =  ${id_user} AND id_font =  ${id_font})`);
        if (liked) {
            await db.none(`UPDATE usr SET like_counter = like_counter - 1 WHERE id_user = ${id_user}`); //id юзера отсылать не нужно
            await db.none(`DELETE FROM "likes" WHERE "id_font" = ${id_font} AND "id_user" = ${id_user}`);
            res.json({success: false, message: "Unlike works"});
        } else {
            await db.none(`UPDATE usr SET like_counter = like_counter + 1 WHERE id_user = ${id_user}`); //id юзера отсылать не нужно
            await db.none(`INSERT INTO likes(id_user, id_font) VALUES('${id_user}', '${id_font}')`);
            res.json({success: true, message: "Like works"});
        }
    } catch (e) {
        console.log(e)
        res.json({success: false, message: "Like not working"});
    }

});

// router.post("/unlike", authorize(), async (req, res) => {
//     try {
//         let {id_font} = req.body;
//         let {id_user} = req.user;
//         await db.none(`UPDATE usr SET like_counter = like_counter - 1 WHERE id_user = ${id_user}`); //id юзера отсылать не нужно
//         await db.none(`DELETE FROM "likes" WHERE "id_font" = ${id_font} AND "id_user" = ${id_user}`);
//         res.json({success: false, message: "Unlike works"});
//     } catch (e) {
//         console.log(e)
//         res.json({success: false, message: "Unlike not working"});
//     }
//
// });


export default router;
