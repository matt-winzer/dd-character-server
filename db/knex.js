const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

const objection = require('objection');
const Model = objection.Model;
const knex = require('knex')
const connection = knex(config)

Model.knex(connection)

module.exports = require('knex')(config);
