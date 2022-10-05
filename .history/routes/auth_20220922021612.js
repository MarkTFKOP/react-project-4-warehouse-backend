import express from "express";
const Router = express.Router();

export default (app) => {
  app.use("/user", Router);
  Router.get("/test", (req, res) => {
    res.send("works");
  });
  Router.post("/add", (req, res) => {
    try {
      res.send(req.body);
    } catch (e) {
      res.json(e);
    }
  });
  return Router;
};
