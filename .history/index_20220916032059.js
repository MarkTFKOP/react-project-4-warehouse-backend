import express from "express";
import mongoose from "mongoose";
import { route } from "./routes";
const app = express();

app.use("/", route());

app.listen(3000, (err, data) => {
  console.log(`
    ################################################
    http://localhost:3000/
    ################################################
    `);
});
