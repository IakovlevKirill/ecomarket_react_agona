import React from "react"
import styles from "./Main.module.sass"
import {Slider} from "./components/slider/Slider"
import {Card} from "./components/card/Card"
import Main_slide_1 from "../../assets/img/Main_slide_1.png"
import Main_slide_2 from "../../assets/img/Main_slide_2.png"
import Main_slide_3 from "../../assets/img/Main_slide_3.png"
import Main_card_map from "../../assets/img/Main_card_map.png"
import Main_card_cycle from "../../assets/img/Main_card_cycle.png"

const slides = [
	{
		title: "Сделаем мир чище",
		content: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
		textButton: "Условия сервиса",
		image: Main_slide_1,
		color: "#B3EDC8"
	},
	{
		title: "А вы знали...",
		content: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ",
		textButton: "Узнать больше",
		image: Main_slide_2,
		color: "#FFE48F"
	},
	{
		title: "Что с масками?",
		content: "Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.",
		textButton: "Пункты сбора масок",
		image: Main_slide_3,
		color: "#BFF0DE"
	}
]
export const Main = () => {
	return (
		<div className={styles.main}>
			<Slider slides={slides}/>
			<div className={styles.block}>
				<Card title={"Пункты сбора"}
					content={"Посмотри, где в твоем городе можно сдать вторсырье на переработку"}
					img={Main_card_map}
					link={"/CollectionPoints"}/>
				<Card title={"ЭкоМаркет"}
					content={"Используй заработанные экокоины для покупки товаров из переработанных материалов "}
					img={Main_card_cycle} link={"/Marketplace"}/>
			</div>
		</div>
	)
}