exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_proficiency"; ALTER SEQUENCE character_proficiency_id_seq RESTART WITH 3;')
    .then(function () {
      var character_proficiencies = [
        {
          id: 1,
          character_id: 1,
          proficiency_id: 87
        },
        {
          id: 2,
          character_id: 1,
          proficiency_id: 79
        }
      ];
      return knex('character_proficiency').insert(character_proficiencies);
    });
};
