import parse from 'html-react-parser';
import main_block from './main_block.module.scss'
import ButtonPrimary from "../buttons/btn-primary/ButtonPrimary"
import ButtonTransparent from "../buttons/btn-transparent/ButtonTransparent"
import { ISlide } from "../../types/types"

interface Props {
	slideState : ISlide,
}

export default function MainBlock({slideState} : Props){
	
	return (
		<>
			<div className={main_block.main__block}>
				<div className={main_block.main__text}>
					<div className={main_block.main__title}>
						<h1>{slideState.activeSlide && parse(slideState.activeSlide.title)}</h1>
					</div>
					<div className={main_block.main__description}>
						<p>{slideState.activeSlide && parse(slideState.activeSlide.description)}</p>
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