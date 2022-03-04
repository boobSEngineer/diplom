import express from "express";
import db from "../db.js"
import {check} from "express-validator";
import jwt from "jsonwebtoken";
import {secretKey} from "../index.js";
import bcrypt from "bcrypt";

const router = express.Router();
const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secretKey, {expiresIn: "24h"});
}

router.post("/registration", [
    check('login').isEmail(),
    check('username', "Invalid username").isLength({min: 1}),
    check('password', "Invalid password").isLength({min: 3, max: 30})
], async (req, res) => {
    try {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     console.log(errors);
        //     res.status(400).json({errors});
        // }
        let {login, username, password} = req.body;
        let user = await db.oneOrNone(`SELECT * FROM usr WHERE login = '${login}'`);
        if (user !== null) {
            res.json({success: false, message: `* Пользователь с таким логином: ${login} уже существуюет.`}).status(400);
        } else {
            let hashPassword = bcrypt.hashSync(password, 7);
            await db.none(`INSERT INTO usr(login, password, name) VALUES('${login}', '${hashPassword}', '${username}')`);
            let user = await db.one(`SELECT * FROM usr WHERE login = '${login}'`);
            let token = generateAccessToken(user.id_user);
            res.cookie('token', token);
            res.json({success: true, message: "* Регистрация прошла успешно."});
        }
        // let hashPassword =

    } catch (e) {
        console.log(e)
        res.json({success: false, message: "* Ошибка регистрации."});
    }
});

router.post("/login", [
    check('login').isEmail(),
    check('password', "* Неверный пароль.").isLength({min: 3, max: 30})
], async (req, res) => {
    try {
        // let errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     console.log(errors);
        //     res.status(400).json({errors});
        // }
        let {login, password} = req.body;
        let user = await db.oneOrNone(`SELECT id_user, login, name, password FROM usr WHERE login = '${login}'`);
        if (!user) {
            res.json({success: false, message: `* Неверный логин.`});
            return
        }
        let validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            res.json({success: false, message: `* Неверный пароль.`})
        } else {
            let token = generateAccessToken(user.id_user);
            res.cookie('token', token);
            return res.json({
                success: true,
                login: user.login,
                username: user.username,
            })
        }
    } catch (e) {
        console.log(e)
        res.json({success: false, message: "error"})
    }
})

router.post("/logout", async (req, res) => {
    try {
        res.cookie('token', null).json({success: true});
    } catch (e) {
        console.log(e)
        res.json({success: false, message: "error logout"})
    }
});

export default router;

