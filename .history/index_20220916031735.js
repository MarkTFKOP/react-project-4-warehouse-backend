import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
const app = express();

app.use("/", routes);

app.listen(3000, (err, data) => {
  console.log(`
    ################################################
    http://localhost:3000/
    ################################################
    `);
});
