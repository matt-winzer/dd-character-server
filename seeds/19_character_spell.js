exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_spell"; ALTER SEQUENCE character_spell_id_seq RESTART WITH 3;')
    .then(function () {
      var character_spells = [
        {
          id: 1,
          character_id: 1,
          spell_id: 87
        },
        {
          id: 2,
          character_id: 1,
          spell_id: 79
        }
      ];
      return knex('character_spell').insert(character_spells);
    });
};
