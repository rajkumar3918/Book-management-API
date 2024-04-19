const CryptoJS = require("crypto-js");
const Users = require("../modal/userSchema");

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");
        if (!authHeader) throw { status: 401, message: "Authorization header not present" };

        const token = authHeader.split(" ")[1];
        if (!token) throw { status: 401, message: "Token not present" };

        const decodedString = CryptoJS.AES.decrypt(token, process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8);
        if (!decodedString) throw { status: 401, message: "Invalid token" };

        const { email, userId } = JSON.parse(decodedString);
        if (!email || !userId) throw { status: 401, message: "Invalid user data in token" };

        const user = await Users.findById(userId);
        if (!user) throw { status: 401, message: "User not found" };

        req.user = user;
        next();
    } catch (error) {
        res.status(error.status || 500).send(error.message);
    }
};

module.exports = authMiddleware;
