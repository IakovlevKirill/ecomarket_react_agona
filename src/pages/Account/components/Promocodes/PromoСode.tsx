import React from "react"
import styles from "./PromoCode.module.sass"
import promo_card_active from "../../../../assets/promo_card_img/promo_card_active.png"
import promo_card_unactive from "../../../../assets/promo_card_img/promo_card_unactive.png"


export interface PromoСodeProps {
    active: boolean
    date: string
    link: string
    price: string
}

export const PromoСode = (props: PromoСodeProps) => {
	return (
		<div className={styles.main}>
			<div className={styles.main__img}>
				{props.active ? (
					<div>
						<img className={styles.main__img__i} src={promo_card_active}/>
					</div>
				) : <div>
					<img className={styles.main__img__i} src={promo_card_unactive}/>
				</div>
				}
				<span className={styles.main__img__price}>{props.price}</span>
			</div>

			<div className={styles.main__info}>
				<div className={styles.main__info__date}>
					<span className={styles.main__info__date__text}>Дата создания:</span>
					<br/>
					<span className={styles.main__info__date__d}>{props.date}</span>
				</div>

				<div className={styles.main__info__link}>
					<span className={styles.main__info__date__text}>Ссылка на товар:</span>
					<br/>
					<span className={styles.main__info__link__l}>{props.link}</span>
				</div>
			</div>
			{props.active ? (
				<div>
					<button type="button" className={styles.main__button}>Показать qr-код</button>
				</div>
			) : null}

		</div>
	)
}