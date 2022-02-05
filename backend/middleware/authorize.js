import jwt from "jsonwebtoken";
import {secretKey} from "../index.js";
import db from "../db.js";

export const authorize = (allowUnauthorizedRequests) => {
    return async (req, res, next) => {
        try {
            let token = req.cookies.token;
            if (token == null) {
                return res.status(403).json({message: "Not auth: no token"});
            } else {
                let decodeData = jwt.verify(token, secretKey);
                if (decodeData.exp >= Date.now() / 1000){
                    req.user = await db.oneOrNone(`SELECT id_user, login, name FROM usr WHERE id_user = '${decodeData.id}' `);
                    next();
                } else {
                    if (allowUnauthorizedRequests) {
                        req.user = null;
                        next();
                    } else {
                        return res.status(403).json({message: "Not auth: expired"});
                    }
                }

            }
        } catch (e) {
            // console.log(e);
            if (allowUnauthorizedRequests) {
                req.user = null;
                next();
            } else {
                return res.status(403).json({message: "Not auth: failed to parse"});
            }
        }
    }
}
