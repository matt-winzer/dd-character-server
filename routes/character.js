const express = require('express');
const router = express.Router();

const Character = require('../models/Character')
const Character_Ability = require('../models/Character_Ability')


// CHARACTER ROUTES

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


router.put('/:id', function(req, res, next) {
  const id = req.params.id

  Character
    .query()
    .patch(req.body)
    .where('id', id)
    .returning('*')
    .then(editedItem => {
      res.status(200).json(editedItem)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

// CHARACTER ABILITY ROUTES

router.get('/:id/ability', function(req, res, next) {
  Character_Ability
    .query()
    .where('character_id', req.params.id)
    .eager('ability')
    .then(characters => {
      res.json(characters)
    })
});

router.put('/:id/ability/:abilityId', function(req, res, next) {
  const id = req.params.id
  const abilityId = req.params.abilityId

  Character_Ability
    .query()
    .patch(req.body)
    .where('character_id', id)
    .andWhere('ability_id', abilityId)
    .returning('*')
    .then(editedItem => {
      res.status(200).json(editedItem)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router;
