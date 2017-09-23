const Model = require('objection').Model;

class Trait extends Model {

  static get tableName() {
    return 'trait';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'trait.id',
          // Join table is character_trait
          through: {
            from: 'character_trait.trait_id',
            to: 'character_trait.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Trait
