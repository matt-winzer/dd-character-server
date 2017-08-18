exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "ability"; ALTER SEQUENCE ability_id_seq RESTART WITH 7;')
    .then(function () {
      var abilities = [{"id":1,"name":"STR","full_name":"Strength","url":"http://www.dnd5eapi.co/api/ability-scores/1"},{"id":2,"name":"DEX","full_name":"Dexterity","url":"http://www.dnd5eapi.co/api/ability-scores/2"},{"id":3,"name":"CON","full_name":"Constitution","url":"http://www.dnd5eapi.co/api/ability-scores/3"},{"id":4,"name":"INT","full_name":"Intelligence","url":"http://www.dnd5eapi.co/api/ability-scores/4"},{"id":5,"name":"WIS","full_name":"Wisdom","url":"http://www.dnd5eapi.co/api/ability-scores/5"},{"id":6,"name":"CHA","full_name":"Charisma","url":"http://www.dnd5eapi.co/api/ability-scores/6"}];
      return knex('ability').insert(abilities);
    });
};
