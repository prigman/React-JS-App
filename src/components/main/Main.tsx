import { useEffect, useState } from "react"
import main from './main.module.scss'
import Slider from "./slider/Slider"
import Block from "../block/Block"
import { ISlide } from "../../types/types"


export default function Main(imageList : string[]){

	const [slideState, changeState] = useState<ISlide>(
		{
			activeSlide: undefined,
			slides: [
				{
					title:'CREATE <span>X</span><br/>CONSTRUCTION',
					description: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.',
					img: imageList[0]
				}, 
				{
					title: 'CREATE <span>NEW</span><br/> IDEAS',
					description: 'Lorem ipsum dolor sit beatae voluptates est laboriosam illo laborum, quasi cumque debitis facere inventore fugit at. Recusandae, excepturi? Nesciunt',
					img: imageList[1]
				}, 
				{
					title: 'MAKE PLANS',
					description: 'amet consectetur adipisicing elit. Consequatur rerum exercitationem iusto modi maxime',
					img: imageList[2]
				}, 
				{
					title: 'LOOK IN THE<br/> <span>FUTURE</span>',
					description: 'dolor sit amet consectetur adipisicing elit. Molestias reiciendis sint, provident laborum rem dignissimos beatae suscipit dolorum sapiente nihil nostrum, ea ratione voluptatibus aspernatur magnam deserunt? Eius, vitae quod?',
					img: imageList[3]
				}
			]
		}
	)
	const styles = { backgroundImage:`url(${slideState.activeSlide?.img})` }
	useEffect(() => {
		changeState({...slideState, activeSlide: slideState.slides[0]});
	}, [])

	function nextSlide() {
		const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.title === slideState.activeSlide.title);
		if (currentIndex < slideState.slides.length - 1)
			changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[currentIndex + 1] }));
		else
			changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[0] }));
	};

	function prevSlide() {
		const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.title === slideState.activeSlide.title);
		if (currentIndex > 0)
			changeState(prevState => ({...prevState, activeSlide: prevState.slides[currentIndex - 1] }));
		else
			changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[prevState.slides.length-1] }));
	};

	return (
		<>
			<main className={main.main}>
				<div style={styles} className={`${main.main__wrapper} background`}>
					<div className={`${main.main__arrow} ${slideState.activeSlide !== slideState.slides[0] ? main.active : ''}`} onClick={prevSlide}>
						<span>←</span>
					</div>
					<div className={main.main__container}>
						<div className={main.main__content}>
							<Block slideState={slideState} />
							<div className={main.main__slider}>
								<Slider slideState={slideState} changeState={changeState} />
							</div>
						</div>
					</div>
					<div className={`${main.main__arrow} ${slideState.activeSlide !== slideState.slides[slideState.slides.length-1] ? main.active : ''}`} onClick={nextSlide}>
						<span>→</span>
					</div>
				</div>
			</main>
		</>
	)
}