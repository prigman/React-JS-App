import main_block from './main_block_other.module.scss'
import { IProps } from '../../types/types'
import parse from 'html-react-parser';

export default function MainBlockOther({title, description} : IProps){
	
	return (
		<>
			<div className={main_block.main__block}>
				<div className={main_block.main__text}>
					<div className={main_block.main__title}>
						<h1>{parse(title)}</h1>
					</div>
					<div className={main_block.main__description}>
						<p>{parse(description)}</p>
					</div>
				</div>
			</div>
		</>
	)
}