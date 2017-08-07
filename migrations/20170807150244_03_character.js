exports.up = function(knex, Promise) {
  return knex.schema.createTable('character', (table) =>{
    table.increments();
    table.integer('player_id').references('player.id').unsigned().onDelete('cascade');
    table.integer('class_id').references('class.id').unsigned().onDelete('cascade');
    table.text('name').notNullable();
    table.text('background');
    table.text('race');
    table.text('alignment');
    table.integer('level');
    table.integer('exp');
    table.integer('age');
    table.text('sex');
    table.integer('height');
    table.integer('weight');
    table.text('hair_color');
    table.text('eye_color');
    table.text('skin_color');
    table.integer('hp_total');
    table.integer('hp_current');
    table.integer('hp_bonus');
    table.integer('speed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character');
};
