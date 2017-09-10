const Model = require('objection').Model

class Class extends Model {

  static get tableName() {
    return 'class'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'class.id',
          to: 'character.class_id'
        }
      },
      features: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Feature',
        join: {
          from: 'class.id',
          to: 'feature.class_id'
        }
      }
    };
  }
}

module.exports = Class
