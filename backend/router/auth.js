import express from "express";
import db from "../db.js"
import {check} from "express-validator";
import jwt from "jsonwebtoken";
import {secretKey} from "../index.js";

const router = express.Router();
const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secretKey, {expiresIn: "24h"});
}

router.post("/registration", [
    check('login').isEmail(),
    check('username', "Invalid username").isLength({min: 2}),
    check('password', "Invalid password").isLength({min: 3, max: 30})
], async (req, res) => {
    try {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     console.log(errors);
        //     res.status(400).json({errors});
        // }
        let {login, username, password} = req.body;
        let user = await db.oneOrNone(`SELECT id_user, login, name, password FROM usr WHERE login = '${login}'`);
        if (user !== null) {
            res.json({message: "User exist"}).status(400);
        } else {
            user = await db.none(`INSERT INTO usr(login, password, name) VALUES('${login}', '${password}', '${username}')`);
            res.json({message: "Register done"});
        }
        // let hashPassword =

    } catch (e) {
        console.log(e)
        res.status(400).json({message: "Registration error"});
    }
});

router.post("/login",[
    check('login').isEmail(),
    check('password', "Invalid password").isLength({min: 3, max: 30})
], async (req, res) => {
    try {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     console.log(errors);
        //     res.status(400).json({errors});
        // }
        let {login, password} = req.body;
        let user = await db.oneOrNone(`SELECT id_user, login, name, password FROM usr WHERE login = '${login}' AND password = '${password}'`);
        if (!user) {
            res.status(400).json({message: `Incorrect login or password`})
        } else {
            let token = generateAccessToken(user.id_user);
            res.cookie('token', token);
            return res.json({
                login: user.login,
                username: user.username,
            })
        }

    } catch (e) {
        console.log(e)
        res.status(400).json({message: "error"})
    }
})

router.post("/logout", async (req, res) => {
    try {
        res.cookie('token', null).json(null);
    }
    catch (e) {
        console.log(e)
        res.status(400).json({message: "error logout"})
    }
});

export default router;

