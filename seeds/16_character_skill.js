exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_skill"; ALTER SEQUENCE character_skill_id_seq RESTART WITH 19;')
    .then(function () {
      var character_skills = [
        {
          id: 1,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 1
        }, {
          id: 2,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 2
        }, {
          id: 3,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 3
        }, {
          id: 4,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 4
        }, {
          id: 5,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 5
        }, {
          id: 6,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 6
        },
        {
          id: 7,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 1
        }, {
          id: 8,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 2
        }, {
          id: 9,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 3
        }, {
          id: 10,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 4
        }, {
          id: 11,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 5
        }, {
          id: 12,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 6
        }, {
          id: 13,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 1
        }, {
          id: 14,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 2
        }, {
          id: 15,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 3
        }, {
          id: 16,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 4
        }, {
          id: 17,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 5
        }, {
          id: 18,
          value: 10,
          modifier: 3,
          character_id: 1,
          ability_id: 6
        }
      ];
      return knex('character_skill').insert(character_skills);
    });
};
