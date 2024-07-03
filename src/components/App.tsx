import React from "react"
// import Counter from "./Counter"
// import InputChange from "./InputChange"
import '../styles/style.scss'
import Header from "./header/Header"
import Main from "./main/Main"


export default function App(){
	return (
		<div id="App">
			{/* <Counter/>
			<InputChange/> */}
			<Header/>
			<Main/>
		</div>
	)
}