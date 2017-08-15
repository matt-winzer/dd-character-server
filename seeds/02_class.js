exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "class"; ALTER SEQUENCE class_id_seq RESTART WITH 3;')
    .then(function () {
      var classes = [{"id":1,"name":"Barbarian","hit_die":12,"url":"http://www.dnd5eapi.co/api/classes/1"},{"id":2,"name":"Bard","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/2"},{"id":3,"name":"Cleric","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/3"},{"id":4,"name":"Druid","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/4"},{"id":5,"name":"Fighter","hit_die":10,"url":"http://www.dnd5eapi.co/api/classes/5"},{"id":6,"name":"Monk","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/6"},{"id":7,"name":"Paladin","hit_die":10,"url":"http://www.dnd5eapi.co/api/classes/7"},{"id":8,"name":"Ranger","hit_die":10,"url":"http://www.dnd5eapi.co/api/classes/8"},{"id":9,"name":"Rogue","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/9"},{"id":10,"name":"Sorcerer","hit_die":6,"url":"http://www.dnd5eapi.co/api/classes/10"},{"id":11,"name":"Warlock","hit_die":8,"url":"http://www.dnd5eapi.co/api/classes/11"},{"id":12,"name":"Wizard","hit_die":6,"url":"http://www.dnd5eapi.co/api/classes/12"}];
      return knex('class').insert(classes);
    });
};
