class AppController {
  /**
   * Rota: /
   * Método: GET
   */
  index(req, res) {
    res.render('./../views/index');
  }
}

module.exports = new AppController();