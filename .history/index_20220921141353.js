import express from "express";
import mongoose from "mongoose";
// import routes from "./routes";
const app = express();

// app.use("/", routes());
app.use("/testQueryParams", (req, res) => {
  try {
    console.log(req.query.test);
    console.log(JSON.parse(req.query.test));
    res.status(200).send(JSON.parse(req.query.test));
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