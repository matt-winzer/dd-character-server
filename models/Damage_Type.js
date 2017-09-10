const Model = require('objection').Model

class Damage_Type extends Model {

  static get tableName() {
    return 'damage_type'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      weapons: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Weapon',
        join: {
          from: 'damage_type.id',
          to: 'weapon.damage_type_id'
        }
      }
    };
  }
}

module.exports = Damage_Type
