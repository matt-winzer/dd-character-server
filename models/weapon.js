const Model = require('objection').Model

class Weapon extends Model {

  static get tableName() {
    return 'weapon'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'weapon.id',
          // Join table is character_weapon
          through: {
            from: 'character_weapon.weapon_id',
            to: 'character_weapon.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Weapon
