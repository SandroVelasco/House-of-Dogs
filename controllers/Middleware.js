class Middleware {
  static sessionCheck(req, res, next) {
    next();
  }
}

module.exports = Middleware;