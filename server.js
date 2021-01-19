const express = require("express");
const connectDB = require("./config/connectDB");
const postRouter = require("./routers/post");
const app = express();
app.use(express.json());
connectDB();
app.use("/api/post", postRouter);

app.listen("5000", (err) => {
  if (err) console.log("error in server connection");
  console.log("server connected...");
});
