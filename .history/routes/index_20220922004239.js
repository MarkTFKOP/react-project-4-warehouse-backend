// import auth from "./auth";
import { Router } from "express";
const app = Router();
export default () => {
  app.use("/", (req, res) => {
    res.send();
  });
  // auth(router);
  return app;
};
