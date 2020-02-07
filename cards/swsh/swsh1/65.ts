import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Pikachu",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/65/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

