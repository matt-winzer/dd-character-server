var express = require('express');
var router = express.Router();

const Character = require('../models/Character')

router.get('/', function(req, res, next) {
  Character
    .query()
    .eager('[weapons, armors, items, abilities, skills, proficiencies, spells, spells.magic_school]')
    .then(characters => {
      res.json(characters)
    })
});

module.exports = router;
