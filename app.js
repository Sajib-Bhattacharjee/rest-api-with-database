const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");

const userRouter = require("./routes/user.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", userRouter);

//Default Route/Home Route.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  res.status(200);
});

//Route not found Error.
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});
//Server Error.
app.use((err, req, res, next) => {
  res.status(501).json({
    message: "Something Broke, Server Error..",
  });
});

module.exports = app;
