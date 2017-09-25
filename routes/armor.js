const express = require('express');
const router = express.Router();

const Armor = require('../models/Armor')

router.get('/', function(req, res, next) {
  Armor
    .query()
    .then(armors => {
      res.json(armors)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.get('/:id', function(req, res, next) {
  Armor
    .query()
    .where('id', req.params.id)
    .then(armor => {
      res.json(armor)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.put('/:id', function(req, res, next) {
  Armor
    .query()
    .patch(req.body)
    .where('id', req.params.id)
    .returning('*')
    .then(editedArmor => {
      res.status(200).json(editedArmor)
    })
    .catch(err => {
      console.log(err.stack)
    })
})

module.exports = router;
