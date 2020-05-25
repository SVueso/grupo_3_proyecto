var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sprint 2 del Grupo 3',saludo:'Buenas!' });
});

module.exports = router;
