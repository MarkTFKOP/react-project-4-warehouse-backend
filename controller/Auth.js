import { request } from "express";

export default function auth() {
  if (request.body.single)
    if (request.body.sort)
      // code run here
      return false; // code run here

  return true; // always run this
}
