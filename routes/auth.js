import express from "express";
const Router = express.Router();

export default (app) => {
  app.use("/user", Router);
  Router.get("/test", (req, res) => {
    res.send("works");
  });
  Router.post("/add", (req, res) => {
    try {
      console.log(req.body);
      res.json(req.body);
    } catch (e) {
      res.status(400).json(e);
    }
  });
  return Router;
};
