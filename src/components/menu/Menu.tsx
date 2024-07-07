import { Link } from 'react-router-dom'
import menu from './menu.module.scss'
import { useLocation } from 'react-router-dom'


export default function Menu(){
	const location = useLocation()
	let currentLink = ''
	const menuList = location.pathname.split('/').filter(page => page !== '').map(page => {
		currentLink += `/${page}`
		return (
			<div className={menu.menu__page} key={page}>
				<Link to='/'>Homepage</Link>
				<Link to={currentLink}>{page}</Link>
			</div>
		)
	})
	return (
		<>
			<div className={menu.menu}>
				{menuList}
			</div>
		</>
	)
}