import mongoose from "mongoose";
import app from "./app"

mongoose.connect("mongodb://localhost:27017/img-Data");
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("db connected");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});