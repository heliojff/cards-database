import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Ribombee",
		fr: "Rubombelle",
		es: "Ribombee",
		it: "Ribombee",
		pt: "Ribombee"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Plentiful Pollen",
			fr: "Pollen Abondant",
			es: "Polen Copioso",
			it: "Polline a Volontà",
			pt: "Abundância de Pólen"
		},

		effect: {
			en: "During your next turn, if the Defending Pokémon is Knocked Out, take 2 more Prize cards.",
			fr: "Pendant votre prochain tour, si le Pokémon Défenseur est mis K.O., récupérez 2 cartes Récompense supplémentaires.",
			es: "Durante tu próximo turno, si el Pokémon Defensor queda Fuera de Combate, coge 2 cartas de Premio más.",
			it: "Durante il tuo prossimo turno, se il Pokémon difensore viene messo KO, prendi due carte Premio in più.",
			pt: "Durante o seu próximo turno, se o Pokémon Defensor for Nocauteado, pegue 2 cartas de Prêmio a mais."
		},

		damage: 30
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card