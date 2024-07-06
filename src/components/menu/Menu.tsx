import { Link } from 'react-router-dom'
import menu from './menu.module.scss'


export default function Menu(){
	return (
		<>
			<div className={menu.menu}>
				<p><Link to='/'> Homepage </Link></p>
				<p className={menu.menu__slash}>/</p>
				<p><Link to='/about'> About Us </Link></p>
			</div>
		</>
	)
}