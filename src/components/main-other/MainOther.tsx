import main from './main_other.module.scss'
import { IProps } from "../../types/types"
import BlockOtherTitle from "../block-other-title/BlockOtherTitle"
import Menu from '../menu/Menu'

interface IPage {
	bgUrl : string,
	prop : IProps
}

export default function MainOther({bgUrl, prop} : IPage){
	return (
		<>
			<main className={`${main.main} background`} style={{backgroundImage:`url(${bgUrl})`, backgroundPosition:'right'}}>
				<div className={main.main__container}>
					<div className={main.main__wrapper}>
						<Menu />
						<BlockOtherTitle {... prop} />
					</div>
				</div>
			</main>
			<div style={ { height:'2000px' } }></div>
		</>
	)
}