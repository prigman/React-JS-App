import { IForm } from '../../../types/types'
import styles from '../form.module.scss'

export default function FormInput({inputType, inputPlaceholder, text} : IForm){
	return (
		<>
			<label className={styles.form__label}>{text}</label>
			<input className={styles.form__input} type={inputType} placeholder={inputPlaceholder}/>
		</>
	)
}