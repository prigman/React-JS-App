import btnStyles from "../btn_styles.module.scss"
import btnPrimary from "./btn_primary.module.scss"

interface IBtn {
	text? : string
}

export default function ButtonPrimary({text} : IBtn){
	return(
		<>
			<button className={`${btnStyles.btn} ${btnPrimary.btn_primary}`}>
				{text ? text : "Submit Request"}
			</button>
		</>
	)
}