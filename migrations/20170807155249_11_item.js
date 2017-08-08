exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('category');
    table.integer('cost_value');
    table.text('cost_unit');
    table.integer('weight');
    table.text('description');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('item');
};
