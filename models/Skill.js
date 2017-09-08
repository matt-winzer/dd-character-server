const Model = require('objection').Model;

class Skill extends Model {

  static get tableName() {
    return 'skill';
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
          from: 'skill.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          // Join table is character_skill
          through: {
            from: 'character_skill.skill_id',
            to: 'character_skill.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Skill
