// import { request, response } from "express";

class Auth {
  test1(request, response, next) {
    // if (request.body.single)
    // if (request.body.sort)
    // code run here
    // return false; // code run here
    // response.setHeader("content-type", "application/json");
    // response.send("thisi sis");
    next("take this");
    // always run thisa
  }
  test2(request, response, next) {
    response.send("Okay");
    return console.log("succuess");
  }
}
export default new Auth();
