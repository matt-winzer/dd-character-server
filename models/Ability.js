const Model = require('objection').Model;

class Ability extends Model {

  static get tableName() {
    return 'ability';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one. We use the file path version
        // here to prevent require loops.
        modelClass: __dirname + '/Character',
        join: {
          from: 'ability.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          // Join table is character_ability
          through: {
            from: 'character_ability.ability_id',
            to: 'character_ability.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Ability
