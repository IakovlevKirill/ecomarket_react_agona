import React, {useState} from "react"
import styles from "./Account.module.sass"
import {Icon} from "../../../Icon/Icon"
import {Modal} from "../../../Modal/Modal"
import Ecocoin_1 from "../../../../assets/img/Ecocoin_1.png"
import Avatar from "../../../../assets/img/Avatar.svg"

export const Account = () => {
	const [visible, setVisible] = useState(false)
	return (
		<div className={styles.block}>
			<div className={styles.place}>
				<div className={styles.pin}><Icon name='pin'/></div>
				<span className={styles.city}>Казань</span>
			</div>
			<div className={styles.money}>
				<div>
					<img src={Ecocoin_1} alt={"money"}/>
				</div>
				<span className={styles.balance}>1000</span>

			</div>
			<div className={styles.avatar}>
				<div><img src={Avatar} alt="" /></div>
				<Modal visible={visible} onClose={() => setVisible(false)}/>
				<button className={styles.text2} onClick={() => setVisible(true)}>Алексей</button>
			</div>
		</div>
	)
}
