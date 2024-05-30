var resultadoModel = require("../models/resultadoModel");

function cadastrar(req, res) {
  var pontuacao = req.body.pontuacaoServer;
  var usuario = req.body.UsuarioServer;


  resultadoModel.cadastrar(usuario, pontuacao)
    .then((resultado) => {
      res.status(201).json(resultado);
    }
    ).catch((erro) => {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
  cadastrar
}