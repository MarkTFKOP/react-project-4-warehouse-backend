import auth from "./auth";
import express from "express";
const router = express.Router();
export const route = () => {
  app.use("/", router);
  auth(router);
};
