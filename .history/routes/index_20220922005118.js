import auth from "./auth";
import { Router } from "express";
const app = Router();
export default () => {
  app.use("/", app);
  auth(app);
  return app;
};
