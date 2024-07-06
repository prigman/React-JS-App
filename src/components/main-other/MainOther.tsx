import main from './main_other.module.scss'
//import bgUrl from "/img/bg-image.jpg"
import { IProps } from "../../types/types"
import MainBlockOther from "../main-block-other/MainBlockOther"
import Menu from '../menu/Menu'


export default function MainOther(prop : IProps){
	return (
		<>
			<main className={main.main}>
				<div className={main.main__container}>
					<Menu />
					<div className={main.main__wrapper}>
						<MainBlockOther {...prop} />
					</div>
				</div>
			</main>
		</>
	)
}