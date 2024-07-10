import { useState } from 'react'
import styles from './form_checkbox.module.scss'
import imgUrl from '/img/check.svg'

export default function FormCheckbox(){
	const [check, setCheck] = useState(false)
	return (
		<>
			<div className={styles.checkbox__container}>
				<label className={styles.checkbox__label}>
					<input className={styles.checkbox} type='checkbox' id='checkbox' name='checkbox' onChange={() => setCheck(prev => !prev)} />
					<span className={`${styles.checkbox__span} ${check && styles.checked}`}> { check && <img src={imgUrl} alt="" /> }</span>
					I agree to receive communications from Createx Construction Bureau.
				</label>
			</div>
		</>
	)
}