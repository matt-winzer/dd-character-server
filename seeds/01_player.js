var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "player"; ALTER SEQUENCE player_id_seq RESTART WITH 3;')
    .then(function () {
      var players = [{
        id: 1,
        username: 'sam',
        email: 'sam@gmail.com',
        password: bcrypt.hashSync('sammy', 10),
        bio: 'Sam is the man.'

      }, {
        id: 2,
        username: 'alex',
        email: 'alex@gmail.com',
        password: bcrypt.hashSync('alexus', 10),
        bio: 'Call me Starburns.'
      }];
      return knex('player').insert(players);
    });
};
