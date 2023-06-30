class User {
  constructor(nome, email, telefone, dataNascimento, cpf, senha, cidade, estado, rua, bairro, cep) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.senha = senha;
    this.cidade = cidade;
    this.estado = estado;
    this.rua = rua;
    this.bairro = bairro;
    this.cep = cep;
  }
}

module.exports = User;
