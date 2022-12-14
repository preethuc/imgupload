import express from "express";
import morgan from "morgan";
import userRoute from "./route/user-route";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("middleware working !");
  next();
});
app.use("/api", userRoute);

module.exports = app;
