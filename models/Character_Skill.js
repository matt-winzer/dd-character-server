const Model = require('objection').Model

class Character_Skill extends Model {

  static get tableName() {
    return 'character_skill'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      character: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'character_skill.character_id',
          to: 'character.id'
        }
      },
      skill: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Skill',
        join: {
          from: 'character_skill.skill_id',
          to: 'skill.id'
        }
      }
    };
  }
}

module.exports = Character_Skill
