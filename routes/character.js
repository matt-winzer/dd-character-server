const express = require('express');
const router = express.Router();

const Character = require('../models/Character')
const Skill = require('../models/Skill')
const Weapon = require('../models/Weapon')

router.get('/', function(req, res, next) {
  Character
    .query()
    .eager('[player, weapons, weapons.properties, weapons.damage_type, armors, items, abilities, skills, proficiencies, spells, spells.magic_school, class, features, features.class, traits]')
    .modifyEager('spells.magic_school', builder => {
      // Only select 'name' column of magic_school table
      builder.select('name');
    })
    .then(characters => {
      res.json(characters)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.get('/:id', function(req, res, next) {
  Character
    .query()
    .where('id', req.params.id)
    .eager('[player, weapons, weapons.properties, weapons.damage_type, armors, items, abilities, skills, proficiencies, spells, spells.magic_school, class, features, features.class, traits]')
    .then(characters => {
      res.json(characters)
    })
});

module.exports = router;
