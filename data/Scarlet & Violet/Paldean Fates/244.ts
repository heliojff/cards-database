import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Ting-Lu ex",
		fr: "Dinglu-ex",
		es: "Ting-Lu ex",
		it: "Ting-Lu-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cursed Land",
			fr: "Terre Maudite",
			es: "Tierra Maldita",
			it: "Terra Maledetta"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent's Pokémon in play that have any damage counters on them have no Abilities, except for Pokémon ex.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon en jeu de votre adversaire ayant au moins un marqueur de dégâts n'ont pas de talent, à l'exception des Pokémon-ex.",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon en juego de tu rival que tengan algún contador de daño sobre ellos no tienen ninguna habilidad, excepto los Pokémon ex.",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco del tuo avversario che hanno dei segnalini danno non hanno abilità, a eccezione dei Pokémon-ex."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Land Scoop",
			fr: "Rafle Terrestre",
			es: "Palada de Tierra",
			it: "Raccolta di Terra"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Pon 2 contadores de daño en uno de los Pokémon en Banca de tu rival.",
			it: "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card