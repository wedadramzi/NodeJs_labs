const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.get("token");
    try {
        jwt.verify(token, "secretkey")
        next();
    } catch (error) {
        res.status(401).send("un-authorized")
    }

}

module.exports = auth;