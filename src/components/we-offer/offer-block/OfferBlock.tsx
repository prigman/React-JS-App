import styles from './offer_block.module.scss'
import { IProps } from '../../../types/types'
import { useState } from 'react'

export default function OfferBlock({title, description} : IProps){
	const [text, setText] = useState(false)
	return (
		<>
			<div onClick={() => setText(prev => !prev)} className={styles.block}>
				<div className={styles.block__item}>
					<p> {text ? "-" : "+"}</p>
				</div>
				<div className={styles.block__wrapper}>
					<div className={styles.block__title}>
						<h3>{title}</h3>
					</div>
					{ text &&
					<div className={styles.block__description}>
						<p>{description}</p>
					</div>
					}
				</div>
			</div>
		</>
	)
}