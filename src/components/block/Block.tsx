import parse from 'html-react-parser';
import block from './block.module.scss'
import ButtonPrimary from "../buttons/btn-primary/ButtonPrimary"
import ButtonTransparent from "../buttons/btn-transparent/ButtonTransparent"
import { ISlide } from "../../types/types"

interface Props {
	slideState : ISlide,
}

export default function Block({slideState} : Props){
	
	return (
		<>
			<div className={block.block}>
				<div className={block.block__text}>
					<div className={block.block__title}>
						<h1>{slideState.activeSlide && parse(slideState.activeSlide.title)}</h1>
					</div>
					<div className={block.block__description}>
						<p>{slideState.activeSlide && parse(slideState.activeSlide.description)}</p>
					</div>
				</div>
				<div className={block.block__buttons}>
					<div className={block.block__btn}>
						<ButtonTransparent/>
					</div>
					<div className={block.block__btn}>
						<ButtonPrimary/>
					</div>
				</div>
			</div>
		</>
	)
}