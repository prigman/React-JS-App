import '../../styles/style.scss'
import Header from "../header/Header"
import Main from "../main/Main"
import WeOffer from "../we-offer/WeOffer"

export default function Home(){
	return (
		<>
			<div id="App">
				<Header/>
				<Main/>
				<WeOffer/>
			</div>
		</>
	)
}