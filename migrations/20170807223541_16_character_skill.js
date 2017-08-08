exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_skill', (table) =>{
    table.increments();
    table.integer('value').notNullable();
    table.integer('modifier').notNullable();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('skill_id').references('skill.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_skill');
};
