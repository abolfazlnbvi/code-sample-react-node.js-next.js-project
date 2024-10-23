const AdsModel = require("../../models/admin/adsModel")

exports.addAds = async (req, res, next) => {
    const item = req.body
    console.log(item);
    try {

        const ads = await AdsModel.create(item)
        console.log(ads);
        res.json({ Massage: "تبلیق افزوده شد", ads })

    } catch (error) {

        res.json({ error })

    }
}

exports.editAds = async (req, res, next) => {
    const { name,
        image,
        categories,
        place,
        size,
        path,
        isActive,
        caption,
        userId } = req.body
    const id = req.params.id
    console.log(name,
        image,
        categories,
        place,
        size,
        path,
        isActive,
        userId);

    try {
        const ads = await AdsModel.findByIdAndUpdate(id, {
            name: name,
            image: image,
            categories: categories,
            place: place,
            size: size,
            path: path,
            isActive: isActive,
            createdAt: Date.now(),
            userId: userId,
            caption: caption
        })

        res.json({
            Massage: "تبلیغ آپدیت شد",
            ads
        })
    } catch (error) {
        res.json({ error })
    }
}


exports.setActiveAds = async (req, res, next) => {
    const {
        isActive,
    } = req.body
    const id = req.params.id

    console.log(id);
    console.log({
        isActive,
    });

    try {
        await AdsModel.findByIdAndUpdate(id,
            {
                isActive: isActive,
            }
        )
        const ads = await AdsModel.find({})
        console.log(ads);
        res.json({ Message: isActive == true ? "بلاگ فعال شد" : "بلاگ غیرفعال شد", ads })
    } catch (error) {
        res.json({ Massage: error })
    }
}
exports.getAllAds = async (req, res, next) => {
    console.log("fuke");
    try {
        const ads = await AdsModel.find({})
        console.log(ads);
        res.json({ ads })
    } catch (error) {
        res.json({ error })
    }
}
exports.getAllByCategory = async (req, res, next) => {
    try {
        const ads = await AdsModel.find({ categories: req.prams.id })

        res.json(ads)
    } catch (error) {
        res.json({ error })
    }
}

exports.getAllAdsActive = async (req, res, next) => {
    try {
        const ads = await AdsModel.find({ isActive: true })

        res.json(ads)
    } catch (error) {
        res.json({ error })
    }
}

exports.getAllByCategoryActive = async (req, res, next) => {
    try {
        const ads = await AdsModel.find({ categories: req.prams.id, isActive: true })

        res.json(ads)
    } catch (error) {
        res.json({ error })
    }
}
exports.getAllByPlaceActive = async (req, res, next) => {
    console.log("req.params.id", req.params.id);
    try {
        const ads = await AdsModel.find({ place: req.params.id, isActive: true })
        console.log(ads);
        res.json(ads)
    } catch (error) {
        res.json({ error })
    }
}



exports.getAllByPlace = async (req, res, next) => {
    console.log(req.params.id);
    try {
        const ads = await AdsModel.find({ place: req.params.id })
        res.json(ads)
    } catch (error) {
        res.json({ error })
    }
}

exports.getOneAdsActive = async (req, res, next) => {
    try {
        const ads = await AdsModel.findById(req.prams.id)
        ads.isActive == true ? res.json({ ads }) : res.json({ Massage: "اجازه دسترسی ندارید" })
    } catch (error) {
        res.json({ error })
    }
}
exports.getOneAds = async (req, res, next) => {


    const item = req.params.id
    console.log(item);

    try {
        const ads = await AdsModel.findById(item)
        res.json({ ads })
    } catch (error) {
        res.json({ Massage: error })
    }
}

exports.deleteAds = async (req, res, next) => {
    const id = req.params.id
    try {
        await AdsModel.findByIdAndDelete(id)

        const ads = await AdsModel.find({})
        console.log(ads);
        res.json({ Message: "بلاگ حذف شد", ads })
    } catch (error) {
        res.json({ Massage: error })
    }
}