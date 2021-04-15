const usuario = require('./../models/Usuario.js');

class AuthController {
  /**
   * Rota: "/login"
   * Método: POST
   */
   async login(req, res) {
    if(!req.body.user || !req.body.password) return res.redirect("/");

    const user = req.body.user;
    const password = req.body.password;

    // Check if user matches
    const userMatches = await usuario.getUser(user, password);

    if(userMatches.length != 0) {
      req.session.user = {
        user: user,
        password: password,
      };
      
      return res.redirect("/home");
    } else {
      return res.redirect("/");
    }
  }
}

module.exports = new AuthController();