var express = require('express')
var router = express.Router()

const Character = require('../models/Character')

const knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dungeons & Dragons' })
})

router.get('/logged', function(req, res, next) {
  let token = req.query.token

  res.render('logged', { auth: 'Facebook', token: token })
})

module.exports = router
