import React from "react"
import '../styles/style.scss'
import Header from "./header/Header"
import Main from "./main/Main"


export default function App(){
	return (
		<>
			<div id="App">
				<Header/>
				<Main/>
			</div>
		</>
	)
}