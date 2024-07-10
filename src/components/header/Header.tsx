import header from './header.module.scss'
import './headroom.scss'
import logoUrl from '/img/logo.svg'
import phoneUrl from '/img/iPhone.svg'
import chatUrl from '/img/Chat.svg'
import { Link } from "react-router-dom"
import { IHeader } from '../../types/types'
import HeadRoom from 'react-headroom'

export default function Header({fixed_class, about, services, work, news, contacts} : IHeader){
	return(
		<>
			<HeadRoom disableInlineStyles wrapperStyle={fixed_class ? {position:'absolute'} : {}} style={ fixed_class ? {position:'fixed'} : {}}>
				<header className={ fixed_class ? `${header.header} ${header.transparent}` : `${header.header}`}>
					<div className={header.header__container}>
						<div className={header.header__logo}>
							<Link to='/'> <img src={logoUrl} alt="logo" /> </Link>
						</div>
						<nav className={header.header__navbar}>
							<ul>
								<li><Link className={about ? header.active : ''} to='/about'> About Us </Link></li>
								<li><Link className={services ? header.active : ''} to='/services'> Services </Link></li>
								<li><Link className={work ? header.active : ''} to='/work'> Work </Link></li>
								<li><Link className={news ? header.active : ''} to='/news'> News </Link></li>
								<li><Link className={contacts ? header.active : ''} to='/contacts'> Contacts </Link></li>
							</ul>
						</nav>
						<div className={header.header__contacts}>
							<div className={header.contacts__block}>
								<div className={header.contacts__image}>
									<img src={phoneUrl} alt="phone"/>
								</div>
								<div className={header.contacts__info}>
									<div className={header.contacts__title}>
										<p>Call us</p>
									</div>
									<div className={header.contacts__text}>
										<p>(405) 555-0128</p>
									</div>
								</div>
							</div>
							<div className={header.contacts__block}>
								<div className={header.contacts__image}>
									<img src={chatUrl} alt="message"/>
								</div>
								<div className={header.contacts__info}>
									<div className={header.contacts__title}>
										<p>Talk to us</p>
									</div>
									<div className={header.contacts__text}>
										<p>hello@createx.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</HeadRoom>
		</>
	)
}