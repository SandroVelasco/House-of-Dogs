const { Store } = require("express-session");

class AppController {
  /**
   * Rota: /
   * Método: GET
   */
  index(req, res) {    
    if(req.session.user) {
      return res.redirect('/home');
    }
    res.render('./../views/index');
  }

  home(req, res) {
    res.render('./../views/home');
  }
}

module.exports = new AppController();