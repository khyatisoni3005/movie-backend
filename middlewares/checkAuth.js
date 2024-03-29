const jwt = require("jsonwebtoken")

function checkAuth(req, res, next) {
    const headers = req.headers;
    const { authorization: token } = headers
    console.log("token", token)
    console.log("--------checkauth---------");

    try {
        const tokenVerification = jwt.verify(token, 'soni')
        console.log("tokenVerification", tokenVerification)
    } catch (err) {
        return res.json({
            success: false,
            error: "token barabar nathi maro bhai"
        })
    }

    next();
}

module.exports = checkAuth

