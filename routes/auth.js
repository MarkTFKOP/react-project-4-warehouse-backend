import express from "express";
const Router = express.Router();

export default (app) => {
  app.use("/user", Router);
  Router.get("/test", (req, res) => {
    res.send("works");
  });
  Router.get("/test", (req, res) => {
    res.send("works");
  });
  return Router;
};
