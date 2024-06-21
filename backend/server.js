import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import foodRoute from "./routes/foodRoute.js";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
connectDB();

// API endpoints
app.use("/api/food", foodRoute);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
