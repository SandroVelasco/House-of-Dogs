const { Store } = require("express-session");

class AppController {
  /**
   * Rota: /
   * Método: GET
   */
  index(req, res) {
    if (req.session.user) {
      return res.redirect("/home");
    }
    res.render("./../views/index");
  }

  /**
   * Rota: /home
   * Método: GET
   */
  home(req, res) {
    res.render("./../views/home");
  }

  /**
   * Rota: /customer
   * Método: GET
   */
  customer(req, res) {
    res.render("./../views/customer");
  }
}

module.exports = new AppController();