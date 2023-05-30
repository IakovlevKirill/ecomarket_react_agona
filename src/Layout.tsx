import React from "react"
import {Header} from "./components/HeaderComponent/Header"
import {Footer} from "./components/FooterComponent/Footer"
import {Outlet} from "react-router-dom"
import styles from "./App.module.sass"

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header/>
			<main><Outlet/></main>
			<Footer/>

		</div>

	)
}