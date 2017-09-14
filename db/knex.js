const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];

const objection = require('objection');
const Model = objection.Model;
const Knex = require('knex');
const connection = Knex(config);

Module.Knex(connection);

module.exports = require('knex')(config);
