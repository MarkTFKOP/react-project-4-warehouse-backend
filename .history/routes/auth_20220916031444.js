import express from "express";
const Router = express.Router();

export default () => {
  app.use("/user", Router);
  Router("/test", (req, res) => {
    res.send("works");
  });
};
