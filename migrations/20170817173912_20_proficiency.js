exports.up = function(knex, Promise) {
  return knex.schema.createTable('proficiency', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('type');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('proficiency');
};
