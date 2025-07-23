import multer from "multer";


const getFileExtension = (filename) => {
    const parts = filename.split('.');
    return parts.length > 1 ? parts.pop() : '';
};



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/tmp')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + getFileExtension(file.originalname))
    },
})

export const upload = multer({ storage });