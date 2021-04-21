class AppController {
  /**
   * Rota: /home
   * Método: GET
   */
  static home(req, res) {
    res.render("./../views/home");
  }

  /**
   * Rota: /customer
   * Método: GET
   */
  static customer(req, res) {
    res.render("./../views/customer");
  }

  /**
   * Rota: /logout
   * Método: GET
   */
  static logout(req, res) {
    req.session.destroy();
    res.clearCookie("session")
    return res.redirect('/');
  }
}

appRoutes = [
  '/home',
  '/customer',
  '/logout'
]

module.exports = {
  AppController,
  appRoutes
};