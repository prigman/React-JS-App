import '../../styles/style.scss'
import Header from "../header/Header"
import MainOther from '../main-other/MainOther'
import { IProps } from "../../types/types"

export default function About(){	
	const prop : IProps = {
		title: 'About Us',
		description: 'Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.'
	}

	return (
		<>
			<div id="App">
				<Header fixed_class={true} about={true}/>
				<MainOther {...prop} />
			</div>
		</>
	)
}