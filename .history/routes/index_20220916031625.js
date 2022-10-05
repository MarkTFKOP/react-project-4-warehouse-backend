import auth from "./auth";
import express from "express";
const router = express.Router();
export default () => {
  app.use("/", router);
  router(auth);
};
