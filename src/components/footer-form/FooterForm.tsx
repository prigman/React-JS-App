import ButtonPrimary from '../buttons/btn-primary/ButtonPrimary'
import styles from './footer_form.module.scss'
import bgUrl from "/img/bg-footer-form.jpg"
import {IForm} from '../../types/types'
import FormInput from '../form/form-input/FormInput'
import FormCheckbox from '../form/form-checkbox/FormCheckbox'
import FormTextarea from '../form/form-textarea/FormTextarea'

export default function FooterForm(){
	const formElements : IForm[] = [
		{
			inputType: 'text',
			inputId: 'name',
			inputName: 'name',
			inputPlaceholder: 'Your name',
			text: 'Name*',
		},
		{
			inputType: 'tel',
			inputId: 'phone',
			inputName: 'phone',
			inputPlaceholder: 'Your phone number',
			text: 'Phone*',
		},
		{
			inputType: 'email',
			inputId: 'email',
			inputName: 'email',
			inputPlaceholder: 'Your working email',
			text: 'Email',
		},
	]
	return (
		<>
			<section className={`${styles.form__container} background`} style={{backgroundImage: `url(${bgUrl})`}}>
				<div className={styles.form__wrapper}>
					<div className={styles.form}>
						<div className={styles.form__content}>
							<h3 className={styles.form__title}>A quick way to discuss details</h3>
							<form className={styles.form__block}>
								{formElements.map((element, index) => (
									<FormInput 
										key={index}
										inputType={element.inputType}
										inputId={element.inputId}
										inputName={element.inputName}
										inputPlaceholder={element.inputPlaceholder}
										text={element.text}
									/>
								))}
								<FormTextarea />
								<FormCheckbox />
								<ButtonPrimary text='Send request' />
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}