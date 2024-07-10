import User from "../models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    const cartData = user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    res.status(200).json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const cartData = user.cartData;

    if (!cartData[req.body.itemId]) {
      return res
        .status(400)
        .json({ success: false, message: "Item not in cart" });
    } else if (cartData[req.body.itemId] === 1) {
      delete cartData[req.body.itemId];
    } else {
      cartData[req.body.itemId] -= 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    res.status(200).json({ success: true, message: "Item removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.status(200).json({ success: true, cartData: user.cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
