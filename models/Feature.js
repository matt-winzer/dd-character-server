const Model = require('objection').Model;

class Feature extends Model {

  static get tableName() {
    return 'feature';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'feature.id',
          // Join table is character_feature
          through: {
            from: 'character_feature.feature_id',
            to: 'character_feature.character_id'
          },
          to: 'character.id'
        }
      },
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Class',
        join: {
          from: 'feature.class_id',
          to: 'class.id'
        }
      }
    };
  }
}

module.exports = Feature
