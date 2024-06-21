import Food from "../models/foodModel.js";
import fs from "fs";

// add food item
export const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;

  if (!name || !description || !price || !category || !req.file) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  let image_filename = `${req.file.filename}`;

  const newFood = new Food({
    name,
    description,
    price,
    image: image_filename,
    category,
  });

  try {
    await newFood.save();
    res.status(200).json({
      success: true,
      message: "Food item added successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
