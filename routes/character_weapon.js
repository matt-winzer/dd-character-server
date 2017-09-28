const express = require('express')
const router = express.Router({mergeParams: true})

const Character_Weapon = require('../models/Character_Weapon')

router.get('/', function(req, res, next) {
  Character_Weapon
    .query()
    .where('character_id', req.params.id)
    .eager('[weapon, weapon.properties, weapon.damage_type]')
    .then(skills => {
      res.json(skills)
    })
});

router.get('/:weaponId', function(req, res, next) {
  Character_Weapon
    .query()
    .where('character_id', req.params.id)
    .andWhere('weapon_id', req.params.weaponId)
    .eager('[weapon, weapon.properties, weapon.damage_type]')
    .then(skill => {
      res.json(skill)
    })
});

router.post('/', function(req, res, next) {
  console.log('Hit it baby');
  Character_Weapon
    .query()
    .insert(req.body)
    .returning('*')
    .then(addedWeapon => {
      res.status(200).json(addedWeapon)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

router.delete('/:weaponId', function(req, res, next) {
  Character_Weapon
    .query()
    .where('character_id', req.params.id)
    .andWhere('weapon_id', req.params.weaponId)
    .delete()
    .returning('*')
    .then(weapon => {
      res.json(weapon)
    })
});

module.exports = router
