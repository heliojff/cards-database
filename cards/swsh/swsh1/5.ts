import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Cottonee",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/5/high.png",
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
			en: "Attach",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
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

