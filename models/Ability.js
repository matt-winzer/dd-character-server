const Model = require('objection').Model

class Ability extends Model {

  static get tableName() {
    return 'ability'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'ability.id',
          // Join table is character_ability
          through: {
            from: 'character_ability.ability_id',
            extra: ['value', 'modifier'],
            to: 'character_ability.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Ability
