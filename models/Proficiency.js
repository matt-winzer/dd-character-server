const Model = require('objection').Model;

class Proficiency extends Model {

  static get tableName() {
    return 'proficiency';
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
          from: 'proficiency.id',
          // ManyToMany relation needs the `through` object to describe the join table.
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
