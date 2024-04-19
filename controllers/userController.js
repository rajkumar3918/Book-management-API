const { genSalt, compare, hash } = require("bcrypt");
const Users = require("../modal/userSchema");
const CryptoJS = require("crypto-js");

const userController = {
    registerUser: async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const checkEmail = await Users.find({ email });

            if (checkEmail.length) {
                throw { status: 400, message: "Email already taken" };
            }
            const checkUsername = await Users.find({ username });
            if (checkUsername.length) {
                throw { status: 400, message: "Username already taken" };
            }
            const salt = await genSalt();
            const hashedPassword = await hash(password, salt);
            const date = new Date();
            const data = await Users.create({
                ...req.body,
                password: hashedPassword,
                createdAt: date,
                updatedAt: date,
            });
            res.send(data);
        } catch (error) {
            res.status(error.status || 500).send(error.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await Users.find({});
            res.send(users);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.find({ email });
            if (!user.length) {
                throw { status: 404, message: "User not found" };
            }
            const checkPass = await compare(password, user[0].password);
            if (!checkPass) {
                throw { status: 401, message: "Incorrect credentials" };
            }
            const userData = JSON.stringify({
                userId: user[0]._id,
                email: user[0].email,
            });
            const token = CryptoJS.AES.encrypt(
                userData,
                process.env.CRYPTO_SECRET
            ).toString();
            console.log("userData:", userData);
            res.send({
                token,
                userId: user[0]._id,
                email: user[0].email,
            });
        } catch (error) {
            res.status(error.status || 500).send(error.message);
        }
    },
};

module.exports = userController;
