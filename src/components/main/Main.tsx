import { useEffect, useState } from "react"
import main from './main.module.scss'
import bgUrl_1 from "/img/bg-image.jpg"
import bgUrl_2 from "/img/bg-image-2.jpg"
import bgUrl_3 from "/img/bg-image-3.jpg"
import bgUrl_4 from "/img/bg-image-4.jpg"
import Slider from "./slider/Slider"
import MainBlock from "../main-block/MainBlock"
import { ISlide } from "../../types/types"


export default function Main(){
	const [slideState, changeState] = useState<ISlide>(
		{
			activeSlide: undefined,
			slides: [
				{
					id: 1,
					title:'CREATE <span>X</span><br/>CONSTRUCTION',
					description: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
					bg: bgUrl_1
				}, 
				{
					id: 2,
					title: 'CREATE <span>NEW</span><br/> IDEAS',
					description: 'Lorem ipsum dolor sit beatae voluptates est laboriosam illo laborum, quasi cumque debitis facere inventore fugit at. Recusandae, excepturi? Nesciunt',
					bg: bgUrl_2
				}, 
				{
					id: 3,
					title: 'MAKE PLANS',
					description: 'amet consectetur adipisicing elit. Consequatur rerum exercitationem iusto modi maxime',
					bg: bgUrl_3
				}, 
				{
					id: 4,
					title: 'LOOK IN THE<br/> <span>FUTURE</span>',
					description: 'dolor sit amet consectetur adipisicing elit. Molestias reiciendis sint, provident laborum rem dignissimos beatae suscipit dolorum sapiente nihil nostrum, ea ratione voluptatibus aspernatur magnam deserunt? Eius, vitae quod?',
					bg: bgUrl_4
				}
			]
		}
	)
	const styles = { backgroundImage:`url(${slideState.activeSlide?.bg})` }
	useEffect(() => {
		changeState({...slideState, activeSlide: slideState.slides[0]});
	}, [])

	function nextSlide() {
		const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.id === slideState.activeSlide.id);
		if (currentIndex < slideState.slides.length - 1)
			changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[currentIndex + 1] }));
	};

	function prevSlide() {
		const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.id === slideState.activeSlide.id);
		if (currentIndex > 0)
			changeState(prevState => ({...prevState, activeSlide: prevState.slides[currentIndex - 1] }));
	};

	return (
		<>
			<main style={styles} className={main.main}>
				<div className={`${main.main__arrow} ${slideState.activeSlide !== slideState.slides[0] ? main.active : ''}`} onClick={prevSlide}>
					<span>←</span>
				</div>
				<div className={main.main__container}>
					<div className={main.main__wrapper}>
						<MainBlock slideState={slideState} />
						<div className={main.main__slider}>
							<Slider slideState={slideState} changeState={changeState} />
						</div>
					</div>
				</div>
				<div className={`${main.main__arrow} ${slideState.activeSlide !== slideState.slides[slideState.slides.length-1] ? main.active : ''}`} onClick={nextSlide}>
					<span>→</span>
				</div>
			</main>
		</>
	)
}