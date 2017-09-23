const express = require('express');
const router = express.Router();

const Character = require('../models/Character')
const Skill = require('../models/Skill')
const Weapon = require('../models/Weapon')
const Item = require('../models/Item')


router.get('/', function(req, res, next) {
  Item
    .query()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.get('/:id', function(req, res, next) {
  Item
    .query()
    .where('id', req.params.id)
    .then(item => {
      res.json(item)
    })
    .catch(err => {
      console.log(err.stack)
    })
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id

  Item
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

module.exports = router;
