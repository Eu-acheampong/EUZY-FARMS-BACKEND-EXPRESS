require("dotenv").config();
require("./config/dbConnect");
const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./routes/auth.router");
const productRouter = require("./routes/product.router");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);

app.listen(4000, () => {
  console.log("server up and running");
});
