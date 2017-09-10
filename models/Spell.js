const Model = require('objection').Model

class Spell extends Model {

  static get tableName() {
    return 'spell'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'spell.id',
          // Join table is character_spell
          through: {
            from: 'character_spell.spell_id',
            to: 'character_spell.character_id'
          },
          to: 'character.id'
        }
      },
      magic_school: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Magic_School',
        join: {
          from: 'spell.magic_school_id',
          to: 'magic_school.id'
        }
      }
    };
  }
}

module.exports = Spell
