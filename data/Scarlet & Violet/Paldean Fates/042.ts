import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Greavard",
		fr: "Toutombe",
		es: "Greavard",
		it: "Greavard",
		pt: "Greavard"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Graveyard Gamboling",
			fr: "Cabriole Funèbre",
			es: "Jugueteo en el Cementerio",
			it: "Saltellacimitero",
			pt: "Cambalhotas no Cemitério"
		},

		effect: {
			en: "This attack does 10 damage for each Psychic Pokémon in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque Pokémon Psychic dans votre pile de défausse.",
			es: "Este ataque hace 10 puntos de daño por cada Pokémon Psychic en tu pila de descartes.",
			it: "Questo attacco infligge 10 danni per ogni Pokémon Psychic nella tua pila degli scarti.",
			pt: "Este ataque causa 10 pontos de dano para cada Pokémon Psychic na sua pilha de descarte."
		},

		damage: "10×"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card