import styles from '../form.module.scss'
import textareaStyles from './form_textarea.module.scss'

export default function FormTextarea(){
	return (
		<>
			<label className={styles.form__label} htmlFor="">
				Message*
			</label>
			<textarea className={ `${styles.form__input} ${textareaStyles.textarea}` } name="textarea" id="textarea" placeholder="Your message"></textarea>
		</>
	)
}