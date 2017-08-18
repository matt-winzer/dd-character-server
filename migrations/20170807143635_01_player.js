exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) =>{
    table.increments();
    table.text('username');
    table.text('email').notNullable().unique();
    table.text('password');
    table.text('token');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player');
};
