exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_weapon', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('weapon_id').references('weapon.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_weapon');
};
