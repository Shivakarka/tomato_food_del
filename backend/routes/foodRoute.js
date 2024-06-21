import express from "express";
import { addFood, listFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);

export default foodRouter;
