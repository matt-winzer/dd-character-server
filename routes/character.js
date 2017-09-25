const express = require('express')
const router = express.Router()

const Character = require('../models/Character')

router.get('/', function(req, res, next) {
  Character
    .query()
    .eager('[player, weapons, weapons.properties, weapons.damage_type, armors, items, abilities(orderById), skills(orderById), skills.ability, proficiencies, spells, spells.magic_school, class, features, features.class, traits]', {
      orderById: (builder) => {
      builder.orderBy('id');
    }
    })
    .modifyEager('spells.magic_school', builder => {
      builder.select('name')
    })
    .modifyEager('skills.ability', builder => {
      builder.select('full_name')
    })
    .then(characters => {
      res.json(characters)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

router.get('/:id', function(req, res, next) {
  Character
    .query()
    .where('id', req.params.id)
    .eager('[player, weapons, weapons.properties, weapons.damage_type, armors, items, abilities, skills, proficiencies, spells, spells.magic_school, class, features, features.class, traits]')
    .then(characters => {
      res.json(characters)
    })
});


router.put('/:id', function(req, res, next) {
  Character
    .query()
    .patch(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(editedItem => {
      res.status(200).json(editedItem)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router
