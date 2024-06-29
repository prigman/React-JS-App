import React from "react"
import bgUrl from "/img/bg-image.jpg"
import ButtonTransparent from "./ButtonTransparent"
import ButtonPrimary from "./ButtonPrimary"

export default function Main(){
	return (
		<main style={{backgroundImage:`url(${bgUrl})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
		}} className="main">
			<div className="main__container">
				<div className="main__wrapper">
					<div className="main__block">
						<div className="main__text">
							<div className="main__title">
								<h1>CREATE<span>X</span><br/>CONSTRUCTION</h1>
							</div>
							<div className="main__description">
								<p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
							</div>
						</div>
						<div className="main__buttons">
							<div className="main__btn">
								<ButtonTransparent/>
							</div>
							<div className="main__btn">
								<ButtonPrimary/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}