exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_item', (table) =>{
    table.increments();
    table.integer('quantity');
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('item_id').references('item.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_item');
};
