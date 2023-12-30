const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { UserModel } = require("./models/user.model");

// create the server
const app = express();

// add middleware
app.use(cors());
app.use(express.json());

// connect to mongo
mongoose.connect("mongodb://localhost:27017/shares-app");

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
        "secret123",
      );

      res.json({ status: "ok", user: token });
    } else {
      res.json({ status: "error", user: false });
    }
  } else {
    res.json({ status: "error", user: false });
  }
});

// listen on port 8000
app.listen(8000, () => {
  console.log("server listening on port 8000");
});
