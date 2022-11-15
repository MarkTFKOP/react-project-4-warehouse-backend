import express from "express";
import mongoose from "mongoose";
// prettier-ignore
import routes from "./routes/index";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();

try {
  // app.use(cors);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", routes());
  const port = process.env.PORT || 3001;
  mongoose.connect(process.env.MONGOOSE_STRING, function (err, data) {
    if (err) return console.log(err);
    console.log("    ------------ Database connected ----------------");
  });
  app.listen(port, (err, data) => {
    if (err) return console.log(err);
    console.log(`
    ################################################
    --------- http://localhost:${port}/ ------------
    ################################################
    `);
  });
} catch (e) {
  console.log(e);
}
