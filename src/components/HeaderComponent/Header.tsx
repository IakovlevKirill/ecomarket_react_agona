import React from "react"
import styles from "./Header.module.sass"
import {NavLink} from "react-router-dom"
import cn from "classnames/bind"
import {Account} from "./component/account/Account"
import Main_logo from "../../assets/img/Main_logo.png"
const cx = cn.bind(styles)

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src={Main_logo} alt={"logo"}/>
			</div>
			<nav>
				<NavLink to="/"
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Главная</NavLink>
				<NavLink to='/CollectionPoints'
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>Пункты
                    сбора</NavLink>
				<NavLink to="/EcoMarket"
					className={({isActive}) => cx(styles.text,
						{activeLink: isActive})}>ЭкоМаркет</NavLink>
				<NavLink to="/About" className={({isActive}) => cx(styles.text,
					{activeLink: isActive})}>О
                    сервисе</NavLink>
			</nav>
			<Account/>
		</header>
	)

}