import express from "express";
const app = express();

app.use("/this", (err, data) => {
  console.log("started");
});
app.listen(3000, (err, data) => {
  console.log("started");
});
