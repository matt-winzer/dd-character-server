exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "magic_school"; ALTER SEQUENCE magic_school_id_seq RESTART WITH 9;')
    .then(function () {
      var magic_schools = [{"id":1,"name":"Abjuration","url":"http://www.dnd5eapi.co/api/magic-schools/1"},{"id":2,"name":"Conjuration","url":"http://www.dnd5eapi.co/api/magic-schools/2"},{"id":3,"name":"Divination","url":"http://www.dnd5eapi.co/api/magic-schools/3"},{"id":4,"name":"Enchantment","url":"http://www.dnd5eapi.co/api/magic-schools/4"},{"id":5,"name":"Evocation","url":"http://www.dnd5eapi.co/api/magic-schools/5"},{"id":6,"name":"Illusion","url":"http://www.dnd5eapi.co/api/magic-schools/6"},{"id":7,"name":"Necromancy","url":"http://www.dnd5eapi.co/api/magic-schools/7"},{"id":8,"name":"Transmutation","url":"http://www.dnd5eapi.co/api/magic-schools/8"}];
      return knex('magic_school').insert(magic_schools);
    });
};
