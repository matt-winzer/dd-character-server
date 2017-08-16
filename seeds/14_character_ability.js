exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_ability"; ALTER SEQUENCE character_ability_id_seq RESTART WITH 14;')
    .then(function () {
      var character_abilities = [
        {
          id: 1,
          value: 15,
          modifier: 3,
          character_id: 1,
          ability_id: 1
        }, {
          id: 2,
          value: 14,
          modifier: 3,
          character_id: 1,
          ability_id: 2
        }, {
          id: 3,
          value: 12,
          modifier: 2,
          character_id: 1,
          ability_id: 3
        }, {
          id: 4,
          value: 10,
          modifier: 1,
          character_id: 1,
          ability_id: 4
        }, {
          id: 5,
          value: 10,
          modifier: 1,
          character_id: 1,
          ability_id: 5
        }, {
          id: 6,
          value: 9,
          modifier: 1,
          character_id: 1,
          ability_id: 6
        }
      ];
      return knex('character_ability').insert(character_abilities);
    });
};
