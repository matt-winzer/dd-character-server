exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_armor', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('armor_id').references('armor.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_armor');
};
