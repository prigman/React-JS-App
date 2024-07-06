import '../../styles/style.scss'
import Header from "../header/Header"
import MainOther from '../main-other/MainOther'
import { IProps } from "../../types/types"


export default function About(){
	const prop : IProps = {
		title: 'INTERIOR<br/>DESIGN',
		description: 'Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.'
	}
	return (
		<>
			<div id="App">
				<Header/>
				<MainOther {...prop} />
			</div>
		</>
	)
}