exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_armor"; ALTER SEQUENCE character_armor_id_seq RESTART WITH 3;')
    .then(function () {
      var character_armors = [
        {
          id: 1,
          character_id: 1,
          armor_id: 4
        },
        {
          id: 2,
          character_id: 1,
          armor_id: 9
        }
      ];
      return knex('character_armor').insert(character_armors);
    });
};
