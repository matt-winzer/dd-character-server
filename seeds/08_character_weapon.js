exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_weapon"; ALTER SEQUENCE character_weapon_id_seq RESTART WITH 3;')
    .then(function () {
      var character_weapons = [
        {
          id: 1,
          character_id: 1,
          weapon_id: 8
        },
        {
          id: 2,
          character_id: 1,
          weapon_id: 12
        }
      ];
      return knex('character_weapon').insert(character_weapons);
    });
};
