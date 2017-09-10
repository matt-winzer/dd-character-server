const Model = require('objection').Model

class Proficiency extends Model {

  static get tableName() {
    return 'proficiency'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        join: {
          from: 'proficiency.id',
          // Join table is character_proficiency
          through: {
            from: 'character_proficiency.proficiency_id',
            to: 'character_proficiency.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Proficiency
