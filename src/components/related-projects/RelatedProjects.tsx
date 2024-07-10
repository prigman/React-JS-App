import { ISlideRelated } from '../../types/types'
import ButtonPrimary from '../buttons/btn-primary/ButtonPrimary'
import Card from './card/Card'
import styles from './related_projects.module.scss'
import imgUrl_1 from '/img/room.jpg'
import imgUrl_2 from '/img/room-2.jpg'
import imgUrl_3 from '/img/room-3.jpg'
import { useState } from 'react'


export default function RelatedProjects(){
	const [slideState, changeState] = useState<ISlideRelated>(
		{
			activeSlides: [
				{
					title: 'Kids Bedroom With Decorations',
					description: 'Apartments & flats',
					img: imgUrl_1
				}, 
				{
					title: 'Modern Double Bedroom',
					description: 'Apartments & flats',
					img: imgUrl_2
				}, 
				{
					title: 'Scandinavian Style Interior',
					description: 'Private houses',
					img: imgUrl_3
				}, 
			],
			slides: [
				{
					title: 'Kids Bedroom With Decorations',
					description: 'Apartments & flats',
					img: imgUrl_1
				}, 
				{
					title: 'Modern Double Bedroom',
					description: 'Apartments & flats',
					img: imgUrl_2
				}, 
				{
					title: 'Scandinavian Style Interior',
					description: 'Private houses',
					img: imgUrl_3
				}, 
			]
		}
	)
	// useEffect(() => {
	// 	changeState({...slideState, activeSlides: slideState.slides[0]});
	// }, [])

	// function nextSlide() {
	// 	const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.title === slideState.activeSlide.title);
	// 	if (currentIndex < slideState.slides.length - 1)
	// 		changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[currentIndex + 1] }));
	// 	else
	// 		changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[0] }));
	// };

	// function prevSlide() {
	// 	const currentIndex = slideState.slides.findIndex(slide => slideState.activeSlide && slide.title === slideState.activeSlide.title);
	// 	if (currentIndex > 0)
	// 		changeState(prevState => ({...prevState, activeSlide: prevState.slides[currentIndex - 1] }));
	// 	else
	// 		changeState(prevState => ({ ...prevState, activeSlide: prevState.slides[prevState.slides.length-1] }));
	// };
	
	return (
		<>
			<section className={styles.section__container}>
				<div className={styles.section__wrapper}>
					<h2 className={styles.section__title}>
						Related projects
					</h2>
					<div className={styles.section__arrows}>
						<div className={styles.section__arrow}>
							←
						</div>
						<div className={styles.section__arrow}>
							→
						</div>
					</div>
					<div className={styles.section__content}>
						{/* {slide.map((slide,index) => (
							<Card key={index} title={slide.title} description={slide.description} img={slide.img} />
						))} */}
					</div>
					<div className={styles.section__works}>
						<h2 className={styles.works__title}>
							Explore all our works
						</h2>
						<ButtonPrimary text='View Portfolio' />
					</div>
				</div>
			</section>
		</>
	)
}