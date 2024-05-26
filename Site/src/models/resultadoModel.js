var database = require("../database/config");

function cadastrar(pontuacao) {
  
  var instrucaoSql = `INSERT INTO quiz (pontuacao) VALUES (${pontuacao})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar
}
