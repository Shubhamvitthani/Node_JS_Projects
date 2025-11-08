const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "No token, access denied" });

        const decoded = jwt.verify(token, "yourSecretKey");
        console.log("Decoded:", decoded);
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err); 
        res.status(403).json({ message: "Invalid or expired token" });
    }
};


module.exports = authMiddleware;
