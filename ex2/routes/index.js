var express = require('express');
var router = express.Router();
var axios = require('axios');

const apiDados = "http://localhost:17000";

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get(apiDados + "/books").then((response) => {
    res.render('index', { livros: response.data });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

module.exports = router;
