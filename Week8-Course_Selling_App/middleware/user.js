const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({
            message: "User token missing"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_USER_SECRET   // ✅ ONLY user secret
        );

        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(403).json({
            message: "Invalid user token"
        });
    }
}

module.exports = {
    userMiddleware
};
