const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRouter = require("./routers/userRouter");
const bookRouter = require("./routers/bookRouter");
const auth = require("./middelware/auth");

const { json, urlencoded } = express;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(urlencoded({ extended: false }));
app.use(auth)
app.use("/users", userRouter);
app.use("/books", bookRouter);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.y6yhged.mongodb.net/${process.env.MONGO_DB}`);


app.listen(process.env.PORT, () => console.log("serever is running at port " + process.env.PORT))