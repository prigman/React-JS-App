import React from "react"
import header from './header.module.scss'
import logoUrl from '/img/logo.svg'
import phoneUrl from '/img/iPhone.svg'
import chatUrl from '/img/Chat.svg'
import { Link } from "react-router-dom"

export default function Header(){
	return(
		<>
			<header className={header.header}>
				<div className={header.header__container}>
					<div className={header.header__logo}>
						<Link to='/'> <img src={logoUrl} alt="logo" /> </Link>
					</div>
					<nav className={header.header__navbar}>
						<ul>
							<li><Link to='/about'> About Us </Link></li>
							<li><Link to='/'> Services </Link></li>
							<li><Link to='/'> Work </Link></li>
							<li><Link to='/'> News </Link></li>
							<li><Link to='/'> Contacts </Link></li>
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
		</>
	)
}