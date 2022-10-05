import express from "express";
import mongoose from "mongoose";
// prettier-ignore
import routes from "./routes/index";
const app = express();

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

app.listen(3000, (err, data) => {
  console.log(`
    ################################################
    http://localhost:3000/
    ################################################
    `);
});
