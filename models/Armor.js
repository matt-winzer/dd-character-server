const Model = require('objection').Model;

class Armor extends Model {

  static get tableName() {
    return 'armor';
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
          from: 'armor.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          // Join table is character_armor
          through: {
            from: 'character_armor.armor_id',
            to: 'character_armor.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Armor
