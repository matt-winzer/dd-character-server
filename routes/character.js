const express = require('express');
const router = express.Router();

const Character = require('../models/Character')
const Character_Ability = require('../models/Character_Ability')
const Character_Skill = require('../models/Character_Skill')


// CHARACTER ROUTES

router.get('/', function(req, res, next) {
  Character
    .query()
    .eager('[player, weapons, weapons.properties, weapons.damage_type, armors, items, abilities, skills, skills.ability, proficiencies, spells, spells.magic_school, class, features, features.class, traits]')
    .modifyEager('spells.magic_school', builder => {
      builder.select('name');
    })
    .modifyEager('skills.ability', builder => {
      builder.select('full_name');
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

// CHARACTER ABILITY ROUTES

// router.get('/:id/ability', function(req, res, next) {
//   Character_Ability
//     .query()
//     .where('character_id', req.params.id)
//     .eager('ability')
//     .then(abilities => {
//       res.json(abilities)
//     })
// })
//
// router.get('/:id/ability/:abilityId', function(req, res, next) {
//   Character_Ability
//     .query()
//     .where('character_id', req.params.id)
//     .andWhere('ability_id', req.params.abilityId)
//     .eager('ability')
//     .then(ability => {
//       res.json(ability)
//     })
// })
//
// router.put('/:id/ability/:abilityId', function(req, res, next) {
//   Character_Ability
//     .query()
//     .patch(req.body)
//     .where('character_id', req.params.id)
//     .andWhere('ability_id', req.params.abilityId)
//     .returning('*')
//     .then(editedItem => {
//       res.status(200).json(editedItem)
//     })
//     .catch(err => {
//       console.log(err.stack)
//     })
// })

// CHARACTER SKILL ROUTES

router.get('/:id/skill', function(req, res, next) {
  Character_Skill
    .query()
    .where('character_id', req.params.id)
    .eager('[skill, skill.ability]')
    .then(skills => {
      res.json(skills)
    })
});

router.get('/:id/skill/:skillId', function(req, res, next) {
  Character_Skill
    .query()
    .where('character_id', req.params.id)
    .andWhere('skill_id', req.params.skillId)
    .eager('[skill, skill.ability]')
    .then(skill => {
      res.json(skill)
    })
});

router.put('/:id/skill/:skillId', function(req, res, next) {
  Character_Skill
    .query()
    .patch(req.body)
    .where('character_id', req.params.id)
    .andWhere('skill_id', req.params.skillId)
    .returning('*')
    .then(editedItem => {
      res.status(200).json(editedItem)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router;
