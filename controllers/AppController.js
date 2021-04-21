const Cliente = require("./../models/Cliente");

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
   * Rota: /addCustomer
   * Método: POST
   */
  static async addCustomer(req, res) {
    // Validação de formulário
    const form = {
      nome: req.body.nome,
      raca: req.body.raca,
      proprietario: req.body.proprietario,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      celular: req.body.celular,
      despesas: req.body.despesas
    }

    for(let prop in form) {
      // Campos telefone e celular são opcionais
      // Se algum outro campo não receber um valor deverá ser redirecionado para /customer com erro form
      if (prop != "telefone" && prop != "celular" && !form[prop]) {
        return res.redirect('/customer?erro=form');
      }
    }

    // Lógica de insert no BD
    await Cliente.newCliente(form);

    return res.redirect('/customer');
  }

  /**
   * Rota: /logout
   * Método: GET
   */
  static logout(req, res) {
    req.session.destroy();
    res.clearCookie("session");
    return res.redirect("/");
  }
}

appRoutes = [
  '/home',
  '/customer',
  '/customer/add',
  '/logout'
]

module.exports = {
  AppController,
  appRoutes
};