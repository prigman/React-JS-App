import React, { useState } from "react"

export default function InputChange(){
	const [value, setValue] = useState('ЗАГОЛОВОК ИНПУТА')
	return(
		<div>
			<h1>{value}</h1>
			<input type="text" value={value} onChange={event => setValue(event.target.value)}/>
		</div>
	)
}