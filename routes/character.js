const express = require('express');
const router = express.Router();

const Character = require('../models/Character')

router.get('/', function(req, res, next) {
  Character
    .query()
    .eager('[weapons, armors, items, abilities, skills, proficiencies, spells, spells.magic_school, class, features, features.class, traits]')
    .then(characters => {
      res.json(characters)
    })
});

module.exports = router;
