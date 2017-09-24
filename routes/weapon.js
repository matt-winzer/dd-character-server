const express = require('express');
const router = express.Router();

const Weapon = require('../models/Weapon')

router.get('/', function(req, res, next) {
  Weapon
    .query()
    .eager('[damage_type, properties]')
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
    .eager('[damage_type, properties]')
    .then(weapon => {
      res.json(weapon)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.put('/:id', function(req, res, next) {
  Weapon
    .query()
    .patch(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(editedWeapon => {
      res.status(200).json(editedWeapon)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router;
