import '../styles/style.scss'
import Header from "../components/header/Header"
import MainOther from '../components/main-other/MainOther'
import { IProps } from "../types/types"
import bgUrl from '/img/bg-image-news.jpg'
import ScrollToTop from '../components/ScrollToTop'
import FooterForm from '../components/footer-form/FooterForm'

export default function News(){
	const prop : IProps = {
		title: 'NEWS',
		description: 'Stay tuned with our news, expert tips and articles.'
	}
	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header fixed_class={true} news={true}/>
				<MainOther bgUrl={bgUrl} prop={prop} />
				<FooterForm />
			</div>
		</>
	)
}