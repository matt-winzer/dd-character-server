var express = require('express');
var router = express.Router();

const Character = require('../models/character')
const knex = require('../db/knex')


router.get('/', function(req, res, next) {

  Character
    .query()
    .eager('weapons')
    .then(characters => {
      res.json(characters)
    })
});

module.exports = router;
