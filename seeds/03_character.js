exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "character"; ALTER SEQUENCE character_id_seq RESTART WITH 2;')
    .then(function () {
      var characters = [{
        id: 1,
        player_id: 1,
        class_id: 6,
        name: 'Morty g3855',
        background: 'Sailor',
        race: 'Halfling',
        alignment: 'Chaotic Good',
        level: 2,
        exp: 100,
        age: 16,
        sex: 'male',
        height: 30,
        weight: 64,
        hair_color: 'Brown',
        eye_color: 'Blue',
        skin_color: 'White',
        hp_total: 17,
        hp_current: 17,
        hp_bonus: 0,
        speed: 35,
        initiative: 3,
        armor_class: 14,
        copper: 0,
        silver: 8,
        electrum: 0,
        gold: 42,
        platinum: 0,
        personality_traits: 'My friends know they can rely on me, no matter what.',
        ideals: 'The thing that keeps a ship together is mutual respect between captain and crew.',
        bonds: 'I was cheated out of my fair share of the profits, and I want to get my due.',
        flaws: 'I follow orders, even if I think they are wrong.'
      }];
      return knex('character').insert(characters);
    });
};
