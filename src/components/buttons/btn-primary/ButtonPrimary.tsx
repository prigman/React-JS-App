import React from "react"
import btnStyles from "../btn_styles.module.scss"
import btnPrimary from "./btn_primary.module.scss"


export default function ButtonPrimary(){
	return(
		<>
			<button className={`${btnStyles.btn} ${btnPrimary.btn_primary}`}>
				Submit Request
			</button>
		</>
	)
}