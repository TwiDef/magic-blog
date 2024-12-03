import express from 'express';
import mongoose from 'mongoose';
import { mongo_link } from './mongo_link.js';
import { registerValidation } from './validations/auth.js';
import checkAuth from './utils/checkAuth.js';
import { getMe, login, register } from './controllers/UserController.js';

mongoose.connect(mongo_link)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB connection failed", error));

const app = express();
app.use(express.json());

app.post("/auth/login", login);
app.post("/auth/register", registerValidation, register);
app.get("/auth/me", checkAuth, getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  };

  console.log("Server listen");
});