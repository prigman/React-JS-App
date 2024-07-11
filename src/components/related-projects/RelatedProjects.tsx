import { useState } from 'react'
import { ISlide } from '../../types/types'
import ButtonPrimary from '../buttons/btn-primary/ButtonPrimary'
import Card from './card/Card'
import styles from './related_projects.module.scss'
import imgUrl_1 from '/img/room.jpg'
import imgUrl_2 from '/img/room-2.jpg'
import imgUrl_3 from '/img/room-3.jpg'
import imgUrl_4 from '/img/building-1.jpg'
import imgUrl_5 from '/img/building-2.jpg'
import imgUrl_6 from '/img/building-3.jpg'


export default function RelatedProjects(){
	const slider : ISlide =
	{
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
			{
				title: 'Cubes Building',
				description: 'Business Centers',
				img: imgUrl_4
			}, 
			{
				title: 'Modern Cottage',
				description: 'Private houses',
				img: imgUrl_5
			}, 
			{
				title: 'Luxury Beach House',
				description: 'Private houses',
				img: imgUrl_6
			}, 
		]
	}
	const [startIndex, setStartIndex] = useState(0);
    const slidesPerPage = 3;

    const nextSlides = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + slidesPerPage, slider.slides.length - slidesPerPage));
    };

    const prevSlides = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - slidesPerPage, 0));
    };

    const visibleSlides = slider.slides.slice(startIndex, startIndex + slidesPerPage);
	
	return (
		<>
			<section className={styles.section__container}>
				<div className={styles.section__wrapper}>
					<h2 className={styles.section__title}>
						Related projects
					</h2>
					<div className={styles.section__arrows}>
						<div className={styles.section__arrow} onClick={prevSlides}>
							←
						</div>
						<div className={styles.section__arrow} onClick={nextSlides}>
							→
						</div>
					</div>
					<div className={styles.section__content}>
						{visibleSlides.map((slide,index) => (
							<Card key={index} title={slide.title} description={slide.description} img={slide.img} />
						))}
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