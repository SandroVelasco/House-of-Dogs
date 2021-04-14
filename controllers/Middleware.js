class Middleware {
  static sessionCheck(req, res, next) {
    // Redirect to "/home" if session exists
    if (req.url == "/") {
      if (req.session.user) {
        return res.redirect("/home");
      }
    }

    next();
  }

  static sessionAppCheck(req, res, next) {
    // Redirect to "/" if session dont exists
    if (!req.session.user) {
      return res.redirect("/");
    }

    next();
  }
}

module.exports = Middleware;