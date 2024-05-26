var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.post("/cadastrar", function (req, res) {
  resultadoController.cadastrar(req, res);
})

module.exports = router;