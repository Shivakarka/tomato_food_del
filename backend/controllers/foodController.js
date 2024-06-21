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

export const listFood = async (req, res) => {
  try {
    const foodList = await Food.find();
    res.status(200).json({
      success: true,
      data: foodList,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in fetching food items",
    });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  try {
    const food = await Food.findById(id);
    fs.unlinkSync("uploads/" + food.image, () => {});
    await Food.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in deleting food item",
    });
  }
};
