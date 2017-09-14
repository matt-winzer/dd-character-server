const Model = require('objection').Model;

class Character extends Model {
  static get tableName() {
    return 'character';
  }
}

module.exports = Character;
