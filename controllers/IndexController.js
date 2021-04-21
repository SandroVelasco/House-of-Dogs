class IndexController {
  static checkIfIsLogged(req, res, next) {
    if (indexRoutes.includes(req.path) && req.session.user)
      return res.redirect("/home");
    
    next();
  }

  static index(req, res) {    
    res.render("./../views/index");
  }
}

const indexRoutes = [
  '/'
];

module.exports = {
  IndexController,
  indexRoutes
};