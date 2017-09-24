const Model = require('objection').Model

class Character_Ability extends Model {

  static get tableName() {
    return 'character_ability'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'character_ability.character_id',
          to: 'character.id'
        }
      },
      ability: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Ability',
        join: {
          from: 'character_ability.ability_id',
          to: 'ability.id'
        }
      }
    };
  }
}

module.exports = Character_Ability
