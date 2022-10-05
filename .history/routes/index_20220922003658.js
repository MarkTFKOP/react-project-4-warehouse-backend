import auth from "./auth";
// import express from "express";
export const route = (app) => {
  app.use("/", router);
  auth(router);
  return router;
};
