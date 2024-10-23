const path = require("path")
const FilesSchema = require('../../models/filesModel')
exports.AddImage = async (req, res, next) => {
  console.log("5555555");
  if (req.file.mimetype === 'image/png' || 'image/jpeg') {
    const image = await FilesSchema.create({
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      encoding: req.file.encoding,
      mimetype: req.file.mimetype,
      destination: req.file.destination,
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      userId: req.body.userId,
      category: req.body.category
    })
    console.log(image);
    res.json({ text: "عکس با موفقیت اضافه شد",
      fileName: req.file.filename
     });
  } else {
    res.json({ error: " فرمت مجاز نیست فرمت های مجاز (png - jpeg)" });

  }
}
exports.AllImage = async (req, res, next) => {
  const image = await FilesSchema.find({category: "img"})
  res.json({image})
}

exports.AddVideo = async (req, res, next) => {
  console.log(req.file);
  console.log(path.join(__dirname, `../../${req.file.originalname}`));
  console.log(req.body.folder);


  res.json({ Message: req.file.filename });

}


exports.AddAudio = async (req, res, next) => {
  console.log(req.file);
  console.log(path.join(__dirname, `../../${req.file.originalname}`));
  console.log(req.body.folder);


  res.json({ text: req.file.filename });

}


exports.Addpdf = async (req, res, next) => {
  console.log(req.file);
  console.log(path.join(__dirname, `../../${req.file.originalname}`));
  console.log(req.body.folder);


  res.json({ text: req.file.filename });

}


exports.AddOther = async (req, res, next) => {
  console.log(req.file);
  console.log(path.join(__dirname, `../../${req.file.originalname}`));
  console.log(req.body.folder);


  res.json({ text: req.file.filename });

}

