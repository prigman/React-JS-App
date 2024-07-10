import styles from './we_offer.module.scss'
import img from '/img/we-offer.jpg'
import OfferBlock from './offer-block/OfferBlock'
import { IProps } from '../../types/types'

export default function WeOffer(){
	const blocks : IProps[] =
	[ 
		{
			title: 'Interior design of apartments',
			description: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.'
		},
		{
			title: 'Interior design of private houses',
			description: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.'
		}
	]
	
	return (
		<>
			<section className={styles.offer}>
				<div className={styles.offer__container}>
					<div className={styles.offer__img}>
						<img src={img} alt="kitchen" />						
					</div>
					<div className={styles.offer__wrapper}>
						<div className={styles.offer__title}>
							<h2>We offer</h2>
						</div>
						<div className={styles.offer__list}>
							{blocks.map((block, index) => (
								<OfferBlock key={index} title={block.title} description={block.description} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}