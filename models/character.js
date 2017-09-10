const Model = require('objection').Model

class Character extends Model {

  static get tableName() {
    return 'character'
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      weapons: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Weapon',
        join: {
          from: 'character.id',
          // Join table is character_weapon
          through: {
            from: 'character_weapon.character_id',
            to: 'character_weapon.weapon_id'
          },
          to: 'weapon.id'
        }
      },
      armors: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Armor',
        join: {
          from: 'character.id',
          // Join table is character_armor
          through: {
            from: 'character_armor.character_id',
            to: 'character_armor.armor_id'
          },
          to: 'armor.id'
        }
      },
      items: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Item',
        join: {
          from: 'character.id',
          // Join table is character_item
          through: {
            from: 'character_item.character_id',
            to: 'character_item.item_id'
          },
          to: 'item.id'
        }
      },
      abilities: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Ability',
        join: {
          from: 'character.id',
          // Join table is character_ability
          through: {
            from: 'character_ability.character_id',
            extra: ['value', 'modifier'],
            to: 'character_ability.ability_id'
          },
          to: 'ability.id'
        }
      },
      skills: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Skill',
        join: {
          from: 'character.id',
          // Join table is character_skill
          through: {
            from: 'character_skill.character_id',
            extra: ['value', 'modifier'],
            to: 'character_skill.skill_id'
          },
          to: 'skill.id'
        }
      },
      proficiencies: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Proficiency',
        join: {
          from: 'character.id',
          // Join table is character_proficiency
          through: {
            from: 'character_proficiency.character_id',
            to: 'character_proficiency.proficiency_id'
          },
          to: 'proficiency.id'
        }
      },
      spells: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Spell',
        join: {
          from: 'character.id',
          // Join table is character_spell
          through: {
            from: 'character_spell.character_id',
            to: 'character_spell.spell_id'
          },
          to: 'spell.id'
        }
      },
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Class',
        join: {
          from: 'character.class_id',
          to: 'class.id'
        }
      },
      features: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Feature',
        join: {
          from: 'character.id',
          // Join table is character_spell
          through: {
            from: 'character_feature.character_id',
            to: 'character_feature.feature_id'
          },
          to: 'feature.id'
        }
      },
    };
  }
}

module.exports = Character
