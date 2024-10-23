const jwt = require("jsonwebtoken")
const ls = require("local-storage")

// {
//      headers: {
//           authorization: "Bearer sadjasldjasldjlaskdj"
//      }
// }

exports.verifyToken = (req, res, next) => {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.json({ code: 1, Message: "شما باید ابتدا وارد حساب کاربری خود شوید" });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            ls.remove(token)

            res.json({ code: 1, Message: "توکن منقضی شده است لطفا وارد حساب کاربری شوید", VarifyToken: false })
        }
        req.body.userId = decoded.user.userId
        console.log("verify");
        next();
    })
}

