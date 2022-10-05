import express from "express";
const app = express();

app.use("/this", (req, res) => {
  res.send("started");
});
app.listen(3000, (err, data) => {
  console.log(`
    ################################################
    http://localhost:3000/
    ################################################
    `);
});
