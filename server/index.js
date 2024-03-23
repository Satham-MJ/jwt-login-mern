const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./Route/UserRoute");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.DB_CONNECT).then(() => {
  console.log("Mongo DB Connect..");
});
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Api Home Page" });
});
app.listen(process.env.PORT);
