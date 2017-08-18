exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_feature"; ALTER SEQUENCE character_feature_id_seq RESTART WITH 3;')
    .then(function () {
      var character_proficiencies = [
        {
          id: 1,
          character_id: 1,
          feature_id: 87
        },
        {
          id: 2,
          character_id: 1,
          feature_id: 79
        }
      ];
      return knex('character_feature').insert(character_proficiencies);
    });
};
