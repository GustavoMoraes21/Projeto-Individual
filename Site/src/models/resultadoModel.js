var database = require("../database/config");

function cadastrar(usuario, pontuacao) {
  
  var instrucaoSql = `INSERT INTO quiz (fkUsuario, pontuacao) VALUES (${usuario}, ${pontuacao})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar
}
