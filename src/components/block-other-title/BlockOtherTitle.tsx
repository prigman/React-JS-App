import block from './block_other_title.module.scss'
import { IProps } from '../../types/types'
import parse from 'html-react-parser';

export default function BlockOtherTitle({title, description} : IProps){
	
	return (
		<>
			<div className={block.block}>
				<div className={block.block__text}>
					<div className={block.block__title}>
						<h1>{parse(title)}</h1>
					</div>
					<div className={block.block__description}>
						<p>{parse(description)}</p>
					</div>
				</div>
			</div>
		</>
	)
}