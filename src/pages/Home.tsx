import '../styles/style.scss'
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import WeOffer from "../components/we-offer/WeOffer"
import bgUrl_1 from "/img/bg-image.jpg"
import bgUrl_2 from "/img/bg-image-2.jpg"
import bgUrl_3 from "/img/bg-image-3.jpg"
import bgUrl_4 from "/img/bg-image-4.jpg"
import bgUrl_about from "/img/bg-image-about.jpg"
import bgUrl_work from "/img/bg-image-work.jpg"
import bgUrl_services from "/img/bg-image-services.jpg"
import bgUrl_news from "/img/bg-image-news.jpg"
import bgUrl_contacts from "/img/bg-image-contacts.jpg"
import imgUrl from '/img/check.svg'
import FooterForm from '../components/footer-form/FooterForm'
import ScrollToTop from '../components/ScrollToTop'
import { useEffect } from 'react'

export default function Home(){
	const imageList = [bgUrl_1, bgUrl_2, bgUrl_3, bgUrl_4, bgUrl_about, bgUrl_work, bgUrl_contacts, bgUrl_news, bgUrl_services, imgUrl]
	useEffect(() => {
		imageList.forEach((image) => {
			new Image().src = image
		});
	})
	return (
		<>
			<div id="App">
				<ScrollToTop />
				<Header/>
				<Main {...imageList}/>
				<WeOffer/>
				<FooterForm />
			</div>
		</>
	)
}