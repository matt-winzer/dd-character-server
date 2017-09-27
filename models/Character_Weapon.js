const Model = require('objection').Model

class Character_Weapon extends Model {

  static get tableName() {
    return 'character_weapon'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'character_weapon.character_id',
          to: 'character.id'
        }
      },
      weapon: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Weapon',
        join: {
          from: 'character_weapon.weapon_id',
          to: 'weapon.id'
        }
      }
    };
  }
}

module.exports = Character_Weapon
