const { indexRoutes } = require("./IndexController");
const { appRoutes } = require("./AppController");
const { authRoutes } = require("./AuthController");

class Middleware {
  /**
   * Check if session exists or not
   */
  static checkSession(req, res, next) {
    if ( (indexRoutes.includes(req.path) || authRoutes.includes(req.path)) && req.session.user)
      return res.redirect("/home");
    else if (appRoutes.includes(req.path) && !req.session.user) {
      return res.redirect("/");
    }
      
    next();
  }
}

module.exports = Middleware;