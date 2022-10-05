import auth from "./auth";
import test from "./test";
import { Router } from "express";
const app = Router();
export default () => {
  auth(app);
  test(app);
  app.use("/", (req, res) => {
    res.send("Hey");
  });
  return app;
};
