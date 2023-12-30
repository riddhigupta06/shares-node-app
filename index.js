const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { UserModel } = require("./models/user.model");
const { CompanyModel } = require("./models/company.model");
const { CalculationModel } = require("./models/calculation.model");
const calculator = require("./calculate");

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

// validate the user given a token
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

// create a company
app.post("/api/company", async (req, res) => {
  try {
    const company = await CompanyModel.create({
      name: req.body.name,
    });
    res.json({ status: "ok", company: company });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "duplicate company!" });
  }
});

// update a company
app.put("/api/company", async (req, res) => {
    try {
      const company = await CompanyModel.findOneAndUpdate({
        name: req.body.name,
      }, {
        status: req.body.status
      });
      res.json({ status: "ok", company: company });
    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err.toString() });
    }
});

// get all companies
app.get("/api/companies", async (req, res) => {
  const companies = await CompanyModel.find();
  res.json({ status: "ok", companies: companies });
});

// get a company
app.get("/api/company", async (req, res) => {
  const company = await CompanyModel.findOne({ name: req.body.name });
  if (company) {
    res.json({ status: "ok", company: company });
  } else {
    res.json({ status: "error", company: false });
  }
});

// do a calculation given the company, type, date, and 6 values
// NOTE: company must exist in the db already
app.post("/api/calculation", async (req, res) => {

    const company = await CompanyModel.findOne({ name: req.body.company })
    if (!company) {
        res.json({ status: 'error', error: 'company does not exist' })
    }

    let data = {}

    if (req.body.type === 'daily') {
        data = calculator.calculateDaily(req.body.ph, req.body.pl, req.body.pc, req.body.pph, req.body.ppl, req.body.ppc)
    } else if (req.body.type === 'weekly') {
        data = calculator.calculateWeekly(req.body.ph, req.body.pl, req.body.pc, req.body.pph, req.body.ppl, req.body.ppc)
    } else if (req.body.type === 'monthly') {
        data = calculator.calculateMonthly(req.body.ph, req.body.pl, req.body.pc, req.body.pph, req.body.ppl, req.body.ppc)
    } else {
        res.json({ status: 'error', error: 'invalid calculation type' })
    }
    
    try {
      const calculation = await CalculationModel.create({
        company: req.body.company,
        date: new Date(req.body.date),
        type: req.body.type,
        ...data
      });
      res.json({ status: "ok", calculation: calculation });

    } catch (err) {
      console.log(err);
      res.json({ status: "error", error: err.toString() });
    }
});

// get all the given company's calculations
app.get("/api/company/calculations/:company", async (req, res) => {
    const company = await CompanyModel.findOne({ name: req.params.company });
    if (!company) {
        res.json({ status: "error", error: "company not found" });
    }

    const calculations = await CalculationModel.find({ company: req.params.company })
    res.json({ status: 'ok', calculations: calculations })
})

// listen on port 8000
app.listen(8000, () => {
  console.log("server listening on port 8000");
});
