exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character_item"; ALTER SEQUENCE character_item_id_seq RESTART WITH 4;')
    .then(function () {
      var character_items = [
        {
          id: 1,
          quantity: 1,
          character_id: 1,
          item_id: 87
        },
        {
          id: 2,
          quantity: 1,
          character_id: 1,
          item_id: 79
        },
        {
          id: 3,
          quantity: 3,
          character_id: 1,
          item_id: 79
        }
      ];
      return knex('character_item').insert(character_items);
    });
};
