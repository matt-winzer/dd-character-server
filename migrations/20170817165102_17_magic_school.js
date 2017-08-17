exports.up = function(knex, Promise) {
  return knex.schema.createTable('magic_school', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('magic_school');
};
