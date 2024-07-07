import main from './main_other.module.scss'
import bgUrl from "/img/bg-image-about.jpg"
import { IProps } from "../../types/types"
import BlockOther from "../block-other/BlockOther"
import Menu from '../menu/Menu'


export default function MainOther(prop : IProps){
	return (
		<>
			<main className={main.main} style={{backgroundImage:`url(${bgUrl})`, backgroundPosition:'right'}}>
				<div className={main.main__container}>
					<div className={main.main__wrapper}>
						<Menu />
						<BlockOther {...prop} />
					</div>
				</div>
			</main>
			<div style={ { height:'2000px' } }></div>
		</>
	)
}