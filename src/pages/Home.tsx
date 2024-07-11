import { useEffect } from 'react'
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
import imgUrl_1 from '/img/room.jpg'
import imgUrl_2 from '/img/room-2.jpg'
import imgUrl_3 from '/img/room-3.jpg'
import imgUrl_4 from '/img/building-1.jpg'
import imgUrl_5 from '/img/building-2.jpg'
import imgUrl_6 from '/img/building-3.jpg'
import FooterForm from '../components/footer-form/FooterForm'
import ScrollToTop from '../components/ScrollToTop'
import RelatedProjects from '../components/related-projects/RelatedProjects'

export default function Home(){
	const imageList = [bgUrl_1, bgUrl_2, bgUrl_3, bgUrl_4, bgUrl_about, bgUrl_work, bgUrl_contacts, bgUrl_news, bgUrl_services, imgUrl, imgUrl_1, imgUrl_2, imgUrl_3, imgUrl_4, imgUrl_5, imgUrl_6]
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
				<RelatedProjects />
				<FooterForm />
			</div>
		</>
	)
}