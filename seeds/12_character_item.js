exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_item"; ALTER SEQUENCE character_item_id_seq RESTART WITH 3;')
    .then(function () {
      var character_items = [
        {
          id: 1,
          character_id: 1,
          item_id: 8
        },
        {
          id: 2,
          character_id: 1,
          item_id: 12
        }
      ];
      return knex('character_item').insert(character_items);
    });
};
