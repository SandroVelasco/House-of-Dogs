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
}

appRoutes = [
  '/home',
  '/customer'
]

module.exports = {
  AppController,
  appRoutes
};