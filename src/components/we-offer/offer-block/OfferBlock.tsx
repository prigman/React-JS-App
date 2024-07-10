import styles from './offer_block.module.scss'
import { IProps } from '../../../types/types'
import { useState } from 'react'
import BlockText from '../../block-text/BlockText'

export default function OfferBlock({title, description} : IProps){
	const [text, setText] = useState(false)
	return (
		<>
			<div onClick={() => setText(prev => !prev)} className={styles.block}>
				<div className={styles.block__item}>
					<p>{text ? "-" : "+"}</p>
				</div>
				<BlockText text={text} title={title} description={description} />
			</div>
		</>
	)
}