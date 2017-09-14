var express = require('express');
var router = express.Router();

const Character = require('../models/Character');


/* GET home page. */
router.get('/', function(req, res, next) {
  Character
    .query()
    .then(characters => {
      res.json(characters)
    })
});

module.exports = router;
