const Model = require('objection').Model

class Property extends Model {

  static get tableName() {
    return 'property'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      weapons: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Weapon',
        join: {
          from: 'property.id',
          // Join table is weapon_property
          through: {
            from: 'weapon_property.property_id',
            to: 'weapon_property.weapon_id'
          },
          to: 'weapon.id'
        }
      }
    };
  }
}

module.exports = Property
