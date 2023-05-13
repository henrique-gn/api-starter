import multer from "multer"
import path from "path"

const localStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "..", "", "..", "uploads"))
  },
  filename: (req, file, cb) => {
    const [name, ext] = file.originalname.split(".")
    const url = `${Date.now()}.${ext}`
    req.body.fileUrl = url
    cb(null, url)
  },
})

export const localUpload = multer({ storage: localStorage })
