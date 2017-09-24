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
        modelClass: __dirname + '/Character',
        join: {
          from: 'skill.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          // Join table is character_skill
          through: {
            from: 'character_skill.skill_id',
            extra: ['value', 'modifier'],
            to: 'character_skill.character_id'
          },
          to: 'character.id'
        }
      },
      ability: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Ability',
        join: {
          from: 'skill.ability_id',
          to: 'ability.id'
        }
      }
    };
  }
}

module.exports = Skill
