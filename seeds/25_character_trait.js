exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_trait"; ALTER SEQUENCE character_trait_id_seq RESTART WITH 3;')
    .then(function () {
      var character_traits = [
        {
          id: 1,
          character_id: 1,
          trait_id: 4
        },
        {
          id: 2,
          character_id: 1,
          trait_id: 9
        }
      ];
      return knex('character_trait').insert(character_traits);
    });
};
