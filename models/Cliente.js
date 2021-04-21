class Cliente {
  static async newCliente(cliente) {
    let { nome, raca, proprietario, endereco, telefone, celular, despesas } = cliente;
    
    const [result] = await global.pool.query('INSERT INTO clientes(animal_nome, animal_raca, proprietario_nome, proprietario_endereco, proprietario_telefone, proprietario_celular, proprietario_despesas)values(?, ?, ?, ?, ?, ?, ?)', [nome, raca, proprietario, endereco, telefone, celular, despesas]);
    return result;
  }
}

module.exports = Cliente;