// FEITO GET /books: devolve uma lista com todos os registos;
// FEITO GET /books/:id: devolve o registo com identificador id (em PR.md deves indicar o que vais usar
// como id);
// GET /books?charater=EEEE: devolve a lista dos livros em que EEEE faz parte do nome de um dos
// personagens;
// GET /books?genre=AAA: devolve a lista dos livros associados ao género (genre) AAA;
// GET /books/genres: devolve a lista de géneros ordenada alfabeticamente e sem repetições;
// GET /books/characters: devolve a lista dos personagens ordenada alfabeticamente e sem
// repetições;
// POST /books: acrescenta um registo novo à BD;
// DELETE /books/:id: elimina da BD o registo com o identificador id;
// PUT /books/:id: altera o registo com o identificador id.

var express = require('express');

var router = express.Router();

var Livro = require('../models/livro');

router.get('/', function (req, res) {
    var selectors = {};

    if (req.query.charater)
        selectors.characters = { $regex: req.query.charater };

    if (req.query.genre)
        selectors.genres = req.query.genre;

    Livro.find(selectors).then(function (livros) {
        res.send(livros);
    }).catch(err => { res.status(500).send(err) });
});

router.post('/', function (req, res) {
    Livro.create(req.body).then(function (livro) {
        res.send(livro);
    }).catch(err => { res.status(500).send(err) });
});

router.put('/:id', function (req, res) {
    Livro.findByIdAndUpdate(req.params.id, req.body).then(function (livro) {
        if (livro) {
            res.send(livro);
        } else {
            res.status(404).send();
        }
    }).catch(err => { res.status(500).send(err) });
});

router.delete('/:id', function (req, res) {
    Livro.findByIdAndDelete(req.params.id).then(function (livro) {
        if (livro) {
            res.send(livro);
        } else {
            res.status(404).send();
        }
    }).catch(err => { res.status(500).send(err) });
});

router.get('/genres', function (req, res) {
    Livro.distinct('genres').sort().then(function (genres) {
        res.send(genres);
    }).catch(err => { res.status(500).send(err) });
});

router.get('/characters', function (req, res) {
    Livro.distinct('characters').sort().then(function (characters) {
        res.send(characters);
    }).catch(err => { res.status(500).send(err) });
});

router.get('/:id', function (req, res) {
    Livro.findById(req.params.id).then(function (livro) {
        if (livro) {
            res.send(livro);
        } else {
            res.status(404).send();
        }
    }).catch(err => { res.status(500).send(err) });
});

module.exports = router