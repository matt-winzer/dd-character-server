exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('category');
    table.text('description');
    table.integer('range_normal');
    table.integer('range_long');
    table.integer('cost_value');
    table.text('cost_unit');
    table.integer('damage_dice_count');
    table.integer('damage_dice_value');
    table.float('weight');
    table.text('url');
    table.integer('damage_type_id').references('damage_type.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('weapon');
};
