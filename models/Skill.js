const Model = require('objection').Model

class Skill extends Model {

  static get tableName() {
    return 'skill'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        join: {
          from: 'skill.id',
          // Join table is character_skill
          through: {
            from: 'character_skill.skill_id',
            extra: ['value', 'modifier'],
            to: 'character_skill.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Skill
