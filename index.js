const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserModel } = require("./models/user.model");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// create the server
const app = express();

// add middleware
app.use(cors());
app.use(express.json());

// connect to mongo
mongoose.connect(process.env.MONGODB_CONNECTION);

// register a user endpoint
app.post("/api/register", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    const user = await UserModel.create({
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "duplicate user!" });
  }
});

// login a user endpoint
app.post("/api/login", async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
  });

  if (user) {
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password,
    );
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        JWT_SECRET,
      );

      res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "error", user: false });
    }
  } else {
    res.json({ status: "error", user: false });
  }
});

app.get("/api/validUser", async (req, res) => {
  const token = req.headers["x-access-token"];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const email = decoded.email;
    const user = await UserModel.findOne({ email: email });

    if (user) {
      res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "invalid token" });
  }
});

// listen on port 8000
app.listen(8000, () => {
  console.log("server listening on port 8000");
});
