exports.Create = (models, error, info) => {
    async (req, res, next) => {
        const item = req.body
        try {
            await models.create({ item });
            res.json({ msg: `uuuu` });
        } catch (error) {
            console.log(error);
        }
        next()
    }
}

exports.GetAll = (models) => {
    async (req, res, next) => {
        try {
            const model = await models.find({});
            res.json(model);
        } catch (error) {
            res.json({ msg: error });
        }
        next()
    }
}


exports.GetOneById = (models, error,) => {
    async (req, res, next) => {
        const id = req.params.id;
        try {
            const respanse = await models.findOne({ _id: id });
            if (!respanse) return res.json({ msg: error });
            res.json(respanse);
        } catch (err) {
            res.json({ msg: err });
        }
        next()

    }
}

exports.GetOneByIdToevery = (models, error) => {
    async (req, res, next) => {
        const id = req.body.id;
        try {
            const respanse = await models.find({ id });
            if (!respanse) return res.json({ msg: error });
            res.json(respanse);
        } catch (err) {
            res.json({ msg: err });
        }
        next()

    }
}

exports.Update = (models) => {
    async (req, res, next) => {
        const item = req.body;
        try {
            await models.findByIdAndUpdate(req.params.id, item);
            res.json({ msg: "آپدیت شد" });
        } catch (error) {
            res.json({ msg: error });
        }
        next()
    }
};

exports.Delete = (models, info) => {
    async (req, res, next) => {
        try {
            await models.findByIdAndDelete(req.params.id);
            res.json({ msg: info });
        } catch (error) {
            res.json({ msg: error });
        }
        next()
    }
}