import React from "react"
import Counter from "./Counter"
import InputChange from "./InputChange"
import Header from "./Header"
import '../styles/style.scss'

export default function App(){
	return (
		<div className="App">
			<Counter/>
			<InputChange/>
			<Header/>
		</div>
	)
}