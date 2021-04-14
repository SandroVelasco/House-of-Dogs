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

    usuarios.forEach(usuario => {
      if(user == usuario.user && password == usuario.password) {
        req.session.user = {
          user: user,
          password: password
        }
        return res.redirect("/home");        
      }
    }) 

    
  }
}

module.exports = new AuthController();