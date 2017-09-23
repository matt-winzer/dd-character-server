const Model = require('objection').Model

class Player extends Model {

  static get tableName() {
    return 'player'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      spells: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'player.id',
          to: 'character.player_id'
        }
      }
    };
  }
}

module.exports = Player
