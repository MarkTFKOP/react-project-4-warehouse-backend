import express from "express";
import controller from "../controller";
const Router = express.Router();

export default (app) => {
  app.use("/testing", Router);

  // Router.get("/test", controller.auth.test1, controller.auth.test2);
  Router.get("/test", controller.auth.test2);
  // Router.get("/test", (req, res) => {
  //   res.send("its working");
  // });
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

// (req, res) => {
//   res.send("its working");
// }
