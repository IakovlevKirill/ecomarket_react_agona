import React from "react"
import styles from "./Products.module.sass"
import {ProductArray} from "./ProductArray"
import NikeAirMax2021 from "../../../../assets/item_card_img/NikeAirMax2021.png"
import NikeAirMax90Premium from "../../../../assets/item_card_img/NikeAirMax90Premium.png"
import AdidasAlphabounseRc from "../../../../assets/item_card_img/AdidasAlphabounseRc.png"
import BlueHoodie from "../../../../assets/item_card_img/BlueHoodie.png"
import NikeAirForce1Low from "../../../../assets/item_card_img/NikeAirForce1Low.png"


const productType = [
	{
		img: NikeAirMax2021,
		brand: "NIKE",
		name: "Nike Air Max 2021",
		type: "Мужская обувь",
		price: 1000
	},
	{
		img: NikeAirMax90Premium,
		brand: "NIKE",
		name: "Nike Air Max 90 Premium",
		type: "Мужская обувь",
		price: 750
	},
	{
		img: AdidasAlphabounseRc,
		brand: "Adidas",
		name: "Adidas Alphabounce RC",
		type: "Мужская обувь",
		price: 1200
	},
	{
		img: BlueHoodie,
		brand: "H&M",
		name: "Nike Air Max 2021",
		type: "Мужская обувь",
		price: 1000
	},
	{
		img: NikeAirForce1Low,
		brand: "NIKE",
		name: "Nike Air Force 1 Low",
		type: "Мужская обувь",
		price: 2100
	}]

export const ProductList = () => {
	return (
		<div className={styles.array}>
			<ProductArray products={productType}/>
		</div>
	)
}