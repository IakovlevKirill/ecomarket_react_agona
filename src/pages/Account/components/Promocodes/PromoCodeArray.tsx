import React from "react"
import {PromoСode, PromoСodeProps} from "./PromoСode"

interface PromoСodeArrayProps {
    promocode: Array<PromoСodeProps>
}

export const PromoСodeArray = (props: PromoСodeArrayProps) => {
	return (
		<div>
			{props.promocode.map((promocode: PromoСodeProps, index: number) =>
				<PromoСode key={index}
					active={promocode.active}
					date={promocode.date}
					link={promocode.link}
					price={promocode.price}/>)}
		</div>

	)
}