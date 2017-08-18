exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_spell', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('spell_id').references('spell.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_spell');
};
