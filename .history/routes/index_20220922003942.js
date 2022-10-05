import auth from "./auth";
import express from "express";
import { Router } from "express";
const app = Router();
export const route = () => {
  app.use("/", router);
  auth(router);
  return router;
};
