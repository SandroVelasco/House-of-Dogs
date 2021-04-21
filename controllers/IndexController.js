class IndexController {
  /**
   * Rota: '/' 
   * Método: GET
   */
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