const usuarios = require('./../models/Usuario.js');

class AuthController {
  /**
   * Rota: "/login"
   * Método: POST
   */
   login(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    if(user == "" || password == "") return false;

    const userMatches = usuarios.find(usuario => usuario.user == user && usuario.password == password);

    if(userMatches) {
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