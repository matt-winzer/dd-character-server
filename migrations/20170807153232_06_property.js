exports.up = function(knex, Promise) {
  return knex.schema.createTable('property', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('description');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('property');
};
