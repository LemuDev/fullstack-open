const jwt = require("jsonwebtoken")
const config = require("../config")

const jwtRequired = (req, res, next) => {
    let bearer = req.headers.authorization
    bearer = bearer.split(" ")
    const encodeToken = bearer[1]
    
    
    if (!encodeToken) {
        return res.status(401).json({ error: "missing Authorization" });
    }

    try {
        const token = jwt.verify(encodeToken, config.JWT_SECRET_KEY)

        req.token = token
    } catch (error) {

        return res.status(401).json({ error: "missing Authorization" });

    }

    

    next()
}

module.exports = jwtRequired