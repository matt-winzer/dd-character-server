exports.up = function(knex, Promise) {
  return knex.schema.createTable('spell', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('range');
    table.text('ritual');
    table.text('duration');
    table.text('concentration');
    table.text('casting_time');
    table.integer('level');
    table.text('url');
    table.integer('magic_school_id').references('magic_school.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('spell');
};
