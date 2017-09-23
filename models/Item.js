const Model = require('objection').Model

class Item extends Model {

  static get tableName() {
    return 'item'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'item.id',
          // Join table is character_item
          through: {
            from: 'character_item.item_id',
            to: 'character_item.character_id'
          },
          to: 'character.id'
        }
      }
    };
  }
}

module.exports = Item
