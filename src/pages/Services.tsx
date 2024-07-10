import '../styles/style.scss'
import Header from "../components/header/Header"
import MainOther from '../components/main-other/MainOther'
import { IProps } from "../types/types"
import bgUrl from '/img/bg-image-services.jpg'
import ScrollToTop from '../components/ScrollToTop'
import FooterForm from '../components/footer-form/FooterForm'

export default function Services(){
	const prop : IProps = {
		title: 'SERVICES',
		description: 'If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.'
	}
	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header fixed_class={true} services={true}/>
				<MainOther bgUrl={bgUrl} prop={prop} />
				<FooterForm />
			</div>
		</>
	)
}