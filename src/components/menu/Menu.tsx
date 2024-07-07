import { Link } from 'react-router-dom'
import menu from './menu.module.scss'
import { useLocation } from 'react-router-dom'


export default function Menu(){
	console.log(useLocation())
	return (
		<>
			<div className={menu.menu}>
				<ul>
					<li>
						<Link to='/'>Homepage</Link>
					</li>
					<li>
						<Link to='/about'>About Us</Link>
					</li>
				</ul>
			</div>
		</>
	)
}