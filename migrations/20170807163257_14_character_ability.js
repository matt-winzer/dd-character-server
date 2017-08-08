exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_ability', (table) =>{
    table.increments();
    table.integer('value').notNullable();
    table.integer('modifier').notNullable();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('ability_id').references('ability.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_ability');
};
