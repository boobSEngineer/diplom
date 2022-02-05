import express from "express";
const router = express.Router();

router.post("/file", async (req, res) => {
    try {
        let path = req.file.filename;
        res.download("/storage/upload/fonts", path);
    }
    catch (e) {
        console.log(e);
        res.status(400).json({message: "Download error"})
    }
})

export default router;
