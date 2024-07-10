import '../styles/style.scss'
import Header from "../components/header/Header"
import MainOther from '../components/main-other/MainOther'
import { IProps } from "../types/types"
import bgUrl from '/img/bg-image-work.jpg'
import ScrollToTop from '../components/ScrollToTop'
import FooterForm from '../components/footer-form/FooterForm'

export default function Work(){
	const prop : IProps = {
		title: 'OUR WORK',
		description: 'Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.'
	}
	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header fixed_class={true} work={true}/>
				<MainOther bgUrl={bgUrl} prop={prop} />
				<FooterForm />
			</div>
		</>
	)
}