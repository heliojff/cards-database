import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Lanturn",
		fr: "Lanturn",
		es: "Lanturn",
		it: "Lanturn",
		pt: "Lanturn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lightning Ball",
			fr: "Boule Éclair",
			es: "Bola Relámpago",
			it: "Fulminpalla",
			pt: "Bola de Raios"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Aqua Spark",
			fr: "Aqua-Étincelle",
			es: "Chispa Aqua",
			it: "Acquascintilla",
			pt: "Faísca de Água"
		},

		effect: {
			en: "If this Pokémon has any Water Energy attached, this attack does 120 more damage.",
			fr: "Si au moins une Énergie Water est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Water unida, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Water assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Water ligada a ele, este ataque causará 120 pontos de dano a mais."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card