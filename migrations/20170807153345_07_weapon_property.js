exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapon_property', (table) =>{
    table.increments();
    table.integer('property_id').references('property.id').unsigned().onDelete('cascade');
    table.integer('weapon_id').references('weapon.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('weapon_property');
};
