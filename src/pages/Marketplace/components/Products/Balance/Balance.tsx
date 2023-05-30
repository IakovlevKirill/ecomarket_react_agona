import React from "react"
import styles from "./Balance.module.sass"
import Ecocoin_3 from "../../../../../assets/img/Ecocoin_3.png"

export const Balance = () => {
	return (
		<div className={styles.balance}>
			<div className={styles.balance__text}>
				<div className={styles.balance__text__one}>
					<div className={styles.balance__text__one__price1}>На вашем балансе</div>
					<div className={styles.balance__text__one__img}><img src={Ecocoin_3} alt={"монета"}/>
					</div>
					<div className={styles.balance__text__one__price2}>200</div>
				</div>

				<div className={styles.balance__text__two}>
                    Вы можете обменять их на скидку 200 руб.
				</div>
			</div>

			<div className={styles.balance__button}>
				<button type="button" className={styles.balance__button__but}>Получить промокод</button>
			</div>

		</div>
	)
}