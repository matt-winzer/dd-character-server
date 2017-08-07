exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) =>{
    table.increments();
    table.text('username').notNullable().unique();
    table.text('email').notNullable().unique();
    table.text('password').notNullable();
    table.dateTime('date_created').notNullable().defaultTo(new Date().toGMTString());
    table.text('bio');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player');
};
