import { IForm } from '../../../types/types'
import styles from '../form.module.scss'

export default function FormInput({inputType, inputId, inputName, inputPlaceholder, text} : IForm){
	return (
		<>
			<label className={styles.form__label}>{text}</label>
			<input className={styles.form__input} type={inputType} id={inputId} placeholder={inputPlaceholder} name={inputName}/>
		</>
	)
}