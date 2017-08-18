exports.up = function(knex, Promise) {
  return knex.schema.createTable('feature', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.integer('level');
    table.text('url');
    table.integer('class_id').references('class.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('feature');
};
