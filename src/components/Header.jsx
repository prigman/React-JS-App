import React from "react";

export default function Header(){
	return(
		<header className="header">
			<div className="header-logo"></div>
			<ul className="header-navbar">
				<li>About Us</li>
				<li>Services</li>
				<li>Work</li>
				<li>News</li>
				<li>Contacts</li>
			</ul>
			<div className="header-contacts">
				<div className="header-contacts__phone">
					<div className="header-contacts__image">
						<img src="" alt="phone"/>
					</div>
					<div className="header-contacts__title">
						<p>Call us</p>
					</div>
					<div className="header-contacts__text">
						<p>(405) 555-0128</p>
					</div>
				</div>
				<div className="header-contacts__email">
					<div className="header-contacts__image">
						<img src="" alt="message"/>
					</div>
					<div className="header-contacts__title">
						<p>Talk to us</p>
					</div>
					<div className="header-contacts__text">
						<p>hello@createx.com</p>
					</div>
				</div>
			</div>
		</header>
	)
}