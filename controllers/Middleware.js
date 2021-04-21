class Middleware {
  static sessionAppCheck(req, res, next) {
    // Redirect to "/" if session dont exists
    if (!req.session.user) {
      return res.redirect("/");
    }

    next();
  }
}

module.exports = Middleware;