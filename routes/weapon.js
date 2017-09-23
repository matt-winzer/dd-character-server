const express = require('express');
const router = express.Router();

const Character = require('../models/Character')
const Skill = require('../models/Skill')
const Weapon = require('../models/Weapon')


router.get('/', function(req, res, next) {
  Weapon
    .query()
    .then(weapons => {
      res.json(weapons)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.get('/:id', function(req, res, next) {
  Weapon
    .query()
    .where('id', req.params.id)
    .then(weapon => {
      res.json(weapon)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id

  Weapon
    .query()
    .patch(req.body)
    .where('id', id)
    .returning('*')
    .then(editedWeapon => {
      res.status(200).json(editedWeapon)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router;
