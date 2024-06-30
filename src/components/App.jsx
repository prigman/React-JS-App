import React from "react"
// import Counter from "./Counter"
// import InputChange from "./InputChange"
import '../styles/style.scss'
import Header from "./Header"
import Main from "./Main"


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