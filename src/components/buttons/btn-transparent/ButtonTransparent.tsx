import React from "react"
import btnStyles from "../btn_styles.module.scss"
import btnTransp from "./btn_transparent.module.scss"

interface IBtn {
	text? : string
	primary? : boolean
}

export default function ButtonTransparent({text, primary} : IBtn){
	return(
		<>
			<button className={`${btnStyles.btn} ${btnTransp.btn_transparent} ${primary && btnTransp.primary}`}>
				{ text ? text : "Learn more about us"}
			</button>
		</>
	)
}