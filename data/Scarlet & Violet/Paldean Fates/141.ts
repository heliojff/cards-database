import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Leer",
			fr: "Groz'Yeux",
			es: "Malicioso",
			it: "Fulmisguardo",
			pt: "Encarar"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Loud Mix",
			fr: "Mélange Tonitruant",
			es: "Mezcla Ruidosa",
			it: "Mixaforte",
			pt: "Mixagem Estrondosa"
		},

		effect: {
			en: "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			es: "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada tipo diferente de Pokémon no seu Banco."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card