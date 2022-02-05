import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "storage/upload/fonts")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.ttf')
    }
})

const types = ["font/ttf", "font/otf"];

const fileFilter = (req, file, cb) => {
    // TODO:
    cb(null, true);
    return;

    console.log("> cb " + file.mimetype)
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export default multer({storage, fileFilter});

