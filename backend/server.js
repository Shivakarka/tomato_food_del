import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import foodRoute from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tomato-food-del.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cookie",
      "Origin",
      "Accept",
      "X-Requested-With",
    ],
  })
);

app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
connectDB();

// API endpoints
app.use("/api/food", foodRoute);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
