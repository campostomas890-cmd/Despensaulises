var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var novedades = [];

  res.render('index', {
    title: 'Inicio',
    novedades: novedades
  });
});

/* GET catalog page. */
router.get('/catalogo', function(req, res, next) {
  var documentos = [];

  res.render('catalogo', {
    title: 'Catálogo',
    documentos: documentos
  });
});

module.exports = router;
