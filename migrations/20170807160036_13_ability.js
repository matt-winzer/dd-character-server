exports.up = function(knex, Promise) {
  return knex.schema.createTable('ability', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ability');
};
