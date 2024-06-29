import React from "react"
import logoUrl from '/img/logo.svg'
import phoneUrl from '/img/iPhone.svg'
import chatUrl from '/img/Chat.svg'

export default function Header(){
	return(
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<img src={logoUrl} alt="" />
				</div>
				<ul className="header__navbar">
					<li>About Us</li>
					<li>Services</li>
					<li>Work</li>
					<li>News</li>
					<li>Contacts</li>
				</ul>
				<div className="header__contacts">
					<div className="contacts__block">
						<div className="contacts__image">
							<img src={phoneUrl} alt="phone"/>
						</div>
						<div className="contacts__info">
							<div className="contacts__title">
								<p>Call us</p>
							</div>
							<div className="contacts__text">
								<p>(405) 555-0128</p>
							</div>
						</div>
					</div>
					<div className="contacts__block">
						<div className="contacts__image">
							<img src={chatUrl} alt="message"/>
						</div>
						<div className="contacts__info">
							<div className="contacts__title">
								<p>Talk to us</p>
							</div>
							<div className="contacts__text">
								<p>hello@createx.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}