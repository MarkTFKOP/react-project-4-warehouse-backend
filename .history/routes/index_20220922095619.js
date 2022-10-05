import auth from "./auth";
import { Router } from "express";
const app = Router();
export default () => {
  auth(app);
  return app;
};
s;
