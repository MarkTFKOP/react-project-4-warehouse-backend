import auth from "./auth";
import express from "express";
import { Router } from "express";
const app = Router();
export default () => {
  app.use("/", (req, res) => {
    res.send();
  });
  // auth(router);
  return app;
};
