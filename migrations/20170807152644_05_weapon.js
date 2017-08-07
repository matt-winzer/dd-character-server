exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('type');
    table.text('subtype');
    table.text('category');
    table.integer('range');
    table.integer('cost_value');
    table.text('cost_unit');
    table.integer('damage_dice');
    table.integer('damage_dice_value');
    table.integer('weight');
    table.text('url');
    table.integer('damage_type_id').references('damage_type.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('weapon');
};
