import styles from './block_text.module.scss'

interface IBlockText {
	text?: boolean
	title : string
	description : string
}

export default function TextBlock({text=true,title, description} : IBlockText){
	return (
		<>
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
		</>
	)
}