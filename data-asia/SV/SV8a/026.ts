import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "オーガポン かまどのめんex",
		id: "Ogerpon Topeng Tungku ex",
		th: "โอการ์ปอง หน้ากากเตาไฟex",
		'zh-tw': "厄鬼椪 火灶面具ex",
		'zh-cn': "厄鬼椪 火灶面具ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "いかりがま",
			id: "Tungku Kemarahan",
			th: "เตาไฟพิโรธ",
			'zh-tw': "憤怒之窯",
			'zh-cn': "憤怒之窯"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにのっているダメカンの数×20ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Token Kerusakan yang dimiliki Pokémon ini.",
			th: "แดเมจจะเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20",
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。",
			'zh-cn': "造成這隻寶可夢身上放置的傷害指示物的數量×20點傷害。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			ja: "ダイナミックブレイズ",
			id: "Dynamic Blaze",
			th: "ไดนามิกเบลซ",
			'zh-tw': "極限火焰",
			'zh-cn': "極限火焰"
		},

		damage: "140+",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、140ダメージ追加。その場合、このポケモンについているエネルギーを、すべてトラッシュする。",
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 140. Pada kondisi tersebut, buang semua Energi yang dikenakan pada Pokémon ini ke Trash.",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 140 เมื่อทำเช่นนั้นแล้ว ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加140點傷害。這個情況下，將這隻寶可夢身上附加的能量卡全部丟棄。",
			'zh-cn': "若對手的戰鬥寶可夢為進化寶可夢，則增加140點傷害。這個情況下，將這隻寶可夢身上附加的能量卡全部丟棄。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card