class Usuario {
  async getUser(usuario, senha) {
    const [rows] = await global.pool.query('SELECT * FROM usuarios WHERE usuario = ? AND senha = ?', [usuario, senha]);
    return rows;
  }
}

module.exports = new Usuario();