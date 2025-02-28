import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノカイナex",
		id: "Iron Hands ex",
		'zh-tw': "鐵臂膀ex",
		'zh-cn': "鐵臂膀ex"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "None",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "アームプレス",
			id: "Arm Press",
			'zh-tw': "臂壓制",
			'zh-cn': "臂壓制"
		},

		damage: 160
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ごっつあんプリファイ",
			id: "Amplifikasi Syukur",
			'zh-tw': "感激放大",
			'zh-cn': "感激放大"
		},

		damage: 120,

		effect: {
			ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			id: "Jika Pokémon lawan KO karena kerusakan akibat serangan ini, ambil Kartu Point 1 lembar lebih banyak.",
			'zh-tw': "若對手的寶可夢因這個招式的傷害而【昏厥】了，則多獲得1張獎賞卡。",
			'zh-cn': "若對手的寶可夢因這個招式的傷害而【昏厥】了，則多獲得1張獎賞卡。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card