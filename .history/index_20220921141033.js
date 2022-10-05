import express from "express";
import mongoose from "mongoose";
// import routes from "./routes";
const app = express();

// app.use("/", routes());
app.use("/testQueryParams", (req, res) => {
  try {
    console.log(req.query);
    res.status(200).send(req.query);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(3000, (err, data) => {
  console.log(`
    ################################################
    http://localhost:3000/
    ################################################
    `);
});
