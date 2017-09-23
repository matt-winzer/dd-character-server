const Model = require('objection').Model

class Magic_School extends Model {

  static get tableName() {
    return 'magic_school'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      spells: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Spell',
        join: {
          from: 'magic_school.id',
          to: 'spell.magic_school_id'
        }
      }
    };
  }
}

module.exports = Magic_School
