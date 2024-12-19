import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import { mongo_link } from './mongo_link.js';
import { registerValidation, loginValidation, postCreateValidation } from './validations/validations.js';
import handleValidationErrors from './utils/handleValidationErrors.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose.connect(mongo_link)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB connection failed", error));

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post("/auth/login", loginValidation, handleValidationErrors, UserController.login);
app.post("/auth/register", registerValidation, handleValidationErrors, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`
  });
});

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
/* auth */
app.post("/posts", checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
app.patch("/posts/:id", checkAuth, postCreateValidation, handleValidationErrors, PostController.update);
app.delete("/posts/:id", checkAuth, PostController.remove);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  };

  console.log("Server listen");
});