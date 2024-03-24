import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire",
		fr: "Élekable",
		es: "Electivire",
		it: "Electivire",
		pt: "Electivire"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Short-Circuit Knuckle",
			fr: "Poing Court-Circuit",
			es: "Nudillo Cortocircuito",
			it: "Pugno Cortocircuito",
			pt: "Punho Curto-circuito"
		},

		effect: {
			en: "If your opponent has any Water Pokémon in play, this attack does 120 more damage.",
			fr: "Si votre adversaire a au moins un Pokémon Water en jeu, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si tu rival tiene algún Pokémon Water en juego, este ataque hace 120 puntos de daño más.",
			it: "Se il tuo avversario ha dei Pokémon Water in gioco, questo attacco infligge 120 danni in più.",
			pt: "Se o seu oponente tiver algum Pokémon Water em jogo, este ataque causará 120 pontos de dano a mais."
		},

		damage: "40+"
	}, {
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		name: {
			en: "Electroslug",
			fr: "Électro Frappe",
			es: "Electropuñetazo",
			it: "Elettropugno",
			pt: "Soco Elétrico"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card