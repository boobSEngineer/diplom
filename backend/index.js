import express from 'express'
import fontRouter from './router/fonts.js';
import likeRouter from './router/likes.js';
import viewRouter from './router/views.js';
import authRouter from './router/auth.js';
import sortRouter from './router/sort.js';
import searchRouter from './router/search.js';
import getRouter from './router/get.js';
import uploadRouter from './router/upload.js';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import path from "path"
import { fileURLToPath } from 'url';

export const secretKey = "SECRET_KEY"

//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

let PORT = process.env.PORT ?? 4000

app.listen(PORT);

app.use(cors({
    optionsSuccessStatus: 200,
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("Hello")
})


app.use("/file/fonts", express.static(path.join(__dirname, "/storage/upload/fonts")))

app.use("/api/fonts", fontRouter);
app.use("/api/likes", likeRouter);
app.use("/api/views", viewRouter);
app.use("/api/search", searchRouter);
app.use("/api/sort", sortRouter);
app.use("/api/auth", authRouter);
app.use("/api/get", getRouter);
app.use("/api/upload", uploadRouter);


