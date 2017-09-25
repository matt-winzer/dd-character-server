const Model = require('objection').Model

class Weapon extends Model {

  static get tableName() {
    return 'weapon'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      characters: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Character',
        join: {
          from: 'weapon.id',
          // Join table is character_weapon
          through: {
            from: 'character_weapon.weapon_id',
            to: 'character_weapon.character_id'
          },
          to: 'character.id'
        }
      },
      properties: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Property',
        join: {
          from: 'weapon.id',
          // Join table is weapon_property
          through: {
            from: 'weapon_property.weapon_id',
            to: 'weapon_property.property_id'
          },
          to: 'property.id'
        }
      },
      damage_type: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Damage_Type',
        join: {
          from: 'weapon.damage_type_id',
          to: 'damage_type.id'
        }
      }
    };
  }
}

module.exports = Weapon
