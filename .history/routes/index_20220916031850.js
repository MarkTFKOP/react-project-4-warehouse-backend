import auth from "./auth";
import express from "express";
const router = express.Router();
export default routes() => {
  app.use("/", router);
  router(auth);
};
