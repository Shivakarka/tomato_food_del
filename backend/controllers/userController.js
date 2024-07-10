import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

//login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .json({ success: false, message: "Please fill all the fields" });
  }

  if (!validator.isEmail(email)) {
    return res
      .status(422)
      .json({ success: false, message: "Invalid email address" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(422)
        .json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(422)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

//register user
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(422)
      .json({ success: false, message: "Please fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res
        .status(422)
        .json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(422)
        .json({ success: false, message: "Email is not valid" });
    }

    if (password.length < 8) {
      return res.status(422).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    const token = createToken(user._id);

    res
      .status(201)
      .json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error in registering user" });
  }
};
