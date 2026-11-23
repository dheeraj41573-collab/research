const User = require("../models/UserModel.js");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getOneUser = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id).select("name email");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const registerAdmin = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    const searchUser = await User.find({ email });
    if (searchUser.length >= 1) {
      return res.status(409).json({
        message: "this email exist",
      });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      try {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name,
          email,
          password: hash,
          role: "admin",
        });
        await user.save();
        return res.status(201).json({ message: "Admin account created" });
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const signup = async (req, res, next) => {
  try {
    const body = req.body || {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const password = typeof body.password === "string" ? body.password : "";

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hash,
      role: "user",
    });
    await user.save();
    return res.status(201).json({ message: "Account created" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this email already exists",
      });
    }
    return res.status(500).json({ message: "Unable to create account right now" });
  }
};

const login = async (req, res, next) => {
  try {
    console.log("[login] attempt for email:", JSON.stringify(req.body.email));
    const user = await User.find({ email: req.body.email });
    if (user.length < 1) {
      console.log("[login] no user found with this email in DB");
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    console.log("[login] user found, stored hash prefix:", user[0].password?.slice(0, 7), "role:", user[0].role);
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        console.log("[login] bcrypt.compare threw error:", err);
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      console.log("[login] bcrypt.compare result:", result);
      if (result) {
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
            role: user[0].role || "user",
          },
          process.env.TOKEN_SECRET /* ,
          {
            expiresIn: "1h",
          } */
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token,
          role: user[0].role || "user",
          name: user[0].name,
        });
      }
      res.status(401).json({
        message: "Auth failed",
      });
    });
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

module.exports = { getOneUser, signup, login, registerAdmin };