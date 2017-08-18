exports.up = function(knex, Promise) {
  return knex.schema.createTable('character_feature', (table) =>{
    table.increments();
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade');
    table.integer('feature_id').references('feature.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('character_feature');
};
