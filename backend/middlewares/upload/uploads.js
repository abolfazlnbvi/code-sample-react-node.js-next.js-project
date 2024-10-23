const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const { log } = require("console");






const storage = multer.diskStorage({
     destination:  (req, file, cb) => {
          cb(null, `./public${req.route.path}`)
          log(file)
     },
     filename: (req, file, cb) => {
          let type 
          type = file.originalname.lastIndexOf('.')
          type = file.originalname.substr(type)
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          cb(null, uniqueSuffix  + '-' + type)
     }
})




exports.UploadsFile = multer({ storage: storage })



exports.profilePhotoResize = async (req, res, next) => {
     if (!req.file) return next();
     req.file.filename = `user-${Date.now()}-${req.file.originalname}`;

     await sharp(req.file.buffer)
          .resize(250, 250)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(path.join(`public/images/profile/${req.file.filename}`))
     next();
}

exports.postImageResize = async (req, res, next) => {
     if (!req.file) return next();
     req.file.filename = `user-${Date.now()}-${req.file.originalname}`;

     await sharp(req.file.buffer)
          .resize(500, 500)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(path.join(`public/images/posts/${req.file.filename}`))
     next();
}
