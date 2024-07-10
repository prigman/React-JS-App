import '../styles/style.scss'
import Header from "../components/header/Header"
import MainOther from '../components/main-other/MainOther'
import { IProps } from "../types/types"
import bgUrl from '/img/bg-image-contacts.jpg'
import ScrollToTop from '../components/ScrollToTop'
import FooterForm from '../components/footer-form/FooterForm'
import { useEffect } from 'react'

export default function Contacts(){
	const imageList = [bgUrl]
	useEffect(() => {
		imageList.forEach((image) => {
			new Image().src = image
		});
	})
	const prop : IProps = {
		title: 'CONTACTS',
		description: 'Contact us for all your construction needs. We always welcome any questions and comments.'
	}

	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header fixed_class={true} contacts={true}/>
				<MainOther bgUrl={bgUrl} prop={prop} />
				<FooterForm />
			</div>
		</>
	)
}