exports.up = function(knex, Promise) {
  return knex.schema.createTable('class', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.integer('hit_die');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('class');
};
