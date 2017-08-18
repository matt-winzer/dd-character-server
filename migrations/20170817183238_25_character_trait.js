exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_trait', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('trait_id').references('trait.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_trait');
};
