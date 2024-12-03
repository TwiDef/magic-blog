import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import { mongo_link } from './mongo_link.js';

import { registerValidation } from './validations/auth.js';
import User from './models/User.js';

mongoose.connect(mongo_link)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB connection failed", error));

const app = express();
app.use(express.json());

app.post("/auth/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return req.status(404).json({
        message: "User not found"
      });
    };
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return req.status(404).json({
        message: "failed login/password"
      });
    };

    const token = jwt.sign({ _id: user._id }, "secret8888", { expiresIn: "30d" });
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to login"
    });
  };
});

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    };

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new User({
      email: req.body.email,
      passwordHash: hash,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl
    });

    const user = await doc.save();
    const token = jwt.sign({ _id: user._id }, "secret8888", { expiresIn: "30d" });
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "failed to register"
    });
  };
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  };

  console.log("Server listen");
});