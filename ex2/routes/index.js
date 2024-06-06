var express = require('express');
var router = express.Router();
var axios = require('axios');

const apiDados = "http://backend:17000";

/* GET home page. */
router.get('/', function (req, res) {
  axios.get(apiDados + "/books").then((response) => {
    res.render('index', { livros: response.data });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

router.get('/authors/:idAutor', function (req, res) {
  axios.get(apiDados + "/books").then((response) => {
    let author = req.params.idAutor;
    let livros = response.data;
    let livrosAutor = livros.filter(livro => livro.author && livro.author.includes(author));
    res.render('author', { author: author, livros: livrosAutor });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

router.get('/:id', function (req, res) {
  axios.get(apiDados + "/books/" + req.params.id).then((response) => {
    res.render('livro', { livro: response.data });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

module.exports = router;
