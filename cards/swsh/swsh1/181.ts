import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-181",
	localId: 181,

	// Card informations
	name: {
		en: "Rotom Bike",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/181/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/181/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],





	attacks: [{
		name: {},
		text: {
			en: "Draw cards until you have 6 cards in your hand. Your turn ends.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

