import React from "react"
import main_block from './main_block.module.scss'
import ButtonPrimary from "../buttons/btn-primary/ButtonPrimary"
import ButtonTransparent from "../buttons/btn-transparent/ButtonTransparent"

export default function MainBlock(){
	
	return (
		<>
			<div className={main_block.main__block}>
				<div className={main_block.main__text}>
					<div className={main_block.main__title}>
						<h1>CREATE<span>X</span><br/>CONSTRUCTION</h1>
					</div>
					<div className={main_block.main__description}>
						<p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
					</div>
				</div>
				<div className={main_block.main__buttons}>
					<div className={main_block.main__btn}>
						<ButtonTransparent/>
					</div>
					<div className={main_block.main__btn}>
						<ButtonPrimary/>
					</div>
				</div>
			</div>
		</>
	)
}