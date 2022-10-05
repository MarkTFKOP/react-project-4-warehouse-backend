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
  // app.use("/testQueryParams", (req, res) => {
  //   try {
  //     res.status(200).send({
  //       ...req.query,
  //       Array: JSON.parse(req.query.Array),
  //       Object: JSON.parse(req.query.Object),
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     res.status(400).send(e);
  //   }
  // });
  const port = process.env.PORT || 3001;
  app.listen(port, (err, data) => {
    console.log(`
    ################################################
    http://localhost:${port}/
    ################################################
    `);
  });
} catch (e) {
  console.log(e);
}
