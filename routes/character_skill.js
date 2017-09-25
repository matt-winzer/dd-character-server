const express = require('express')
const router = express.Router({mergeParams: true})

const Character_Skill = require('../models/Character_Skill')

router.get('/', function(req, res, next) {
  Character_Skill
    .query()
    .where('character_id', req.params.id)
    .eager('[skill, skill.ability]')
    .then(skills => {
      res.json(skills)
    })
});

router.get('/:skillId', function(req, res, next) {
  Character_Skill
    .query()
    .where('character_id', req.params.id)
    .andWhere('skill_id', req.params.skillId)
    .eager('[skill, skill.ability]')
    .then(skill => {
      res.json(skill)
    })
});

router.put('/:skillId', function(req, res, next) {
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

module.exports = router
