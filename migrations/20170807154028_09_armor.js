exports.up = function(knex, Promise) {
  return knex.schema.createTable('armor', (table) =>{
    table.increments();
    table.text('name').notNullable();
    table.text('category');
    table.integer('ac_base');
    table.boolean('ac_dex_bonus').defaultTo(false);
    table.integer('ac_max_bonus');
    table.integer('strength_min');
    table.boolean('stealth_disadvantage').defaultTo(true);
    table.integer('weight');
    table.integer('cost_value');
    table.text('cost_unit');
    table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('armor');
};
