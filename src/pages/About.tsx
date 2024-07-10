import '../styles/style.scss'
import Header from "../components/header/Header"
import MainOther from '../components/main-other/MainOther'
import { IProps } from "../types/types"
import ScrollToTop from '../components/ScrollToTop'
import FooterForm from '../components/footer-form/FooterForm'
import bgUrl from "/img/bg-image-about.jpg"

export default function About(){
	const prop : IProps = {
		title: 'About Us',
		description: 'Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.'
	}

	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header fixed_class={true} about={true}/>
				<MainOther bgUrl={bgUrl} prop={prop} />
				<FooterForm />
			</div>
		</>
	)
}