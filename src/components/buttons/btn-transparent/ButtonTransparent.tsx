import React from "react"
import btnStyles from "../btn_styles.module.scss"
import btnTransp from "./btn_transparent.module.scss"

export default function ButtonTransparent(){
	return(
		<>
			<button className={`${btnStyles.btn} ${btnTransp.btn_transparent}`}>
				Learn more about us
			</button>
		</>
	)
}