exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_proficiency', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('proficiency_id').references('proficiency.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_proficiency');
};
