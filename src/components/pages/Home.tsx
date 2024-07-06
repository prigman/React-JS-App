import '../../styles/style.scss'
import Header from "../header/Header"
import Main from "../main/Main"


export default function Home(){
	return (
		<>
			<div id="App">
				<Header/>
				<Main/>
			</div>
		</>
	)
}