const Model = require('objection').Model

class Armor extends Model {

  static get tableName() {
    return 'armor'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
          from: 'armor.id',
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
