const express = require('express')
const router = express.Router({mergeParams: true})

const Character_Ability = require('../models/Character_Ability')

router.get('/', function(req, res, next) {
  Character_Ability
    .query()
    .where('character_id', req.params.id)
    .eager('ability')
    .then(abilities => {
      res.json(abilities)
    })
})

router.get('/:abilityId', function(req, res, next) {
  Character_Ability
    .query()
    .where('character_id', req.params.id)
    .andWhere('ability_id', req.params.abilityId)
    .eager('ability')
    .then(ability => {
      res.json(ability)
    })
})

router.put('/:abilityId', function(req, res, next) {
  Character_Ability
    .query()
    .patch(req.body)
    .where('character_id', req.params.id)
    .andWhere('ability_id', req.params.abilityId)
    .returning('*')
    .then(editedItem => {
      res.status(200).json(editedItem)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router
