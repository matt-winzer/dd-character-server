exports.up = function(knex, Promise) {
  return knex.schema.createTable('trait', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('trait');
};
