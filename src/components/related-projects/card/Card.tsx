import { useState } from 'react'
import { ISlideTemplate } from '../../../types/types'
import ButtonTransparent from '../../buttons/btn-transparent/ButtonTransparent'
import styles from './card.module.scss'

export default function Card({title, description, img} : ISlideTemplate){
	const [button, setButton] = useState(false)
	return (
		<>
			<div onMouseEnter={() => setButton(prev => true)} onMouseLeave={() => setButton(prev => false)} className={styles.card}>
				<div className={styles.card__img}>
					<img src={img} alt="Modern Interior" />
				</div>
				<div className={styles.card__info}>
					<h4 className={styles.card__title}>
						{title}
					</h4>
					<p className={styles.card__text}>
						{description}
					</p>
					{button && <ButtonTransparent text='View Project' primary={true}/> }
				</div>
			</div>
		</>
	)
}