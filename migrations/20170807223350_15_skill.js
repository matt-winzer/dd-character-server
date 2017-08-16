exports.up = function(knex, Promise) {
  return knex.schema.createTable('skill', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.integer('ability_id').references('ability.id').unsigned().onDelete('cascade');
    table.text('description');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('skill');
};
