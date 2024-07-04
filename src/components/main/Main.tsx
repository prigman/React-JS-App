import React, { useState } from "react"
import main from './main.module.scss'
import bgUrl_1 from "/img/bg-image.jpg"
import Slider from "./slider/Slider"
import MainBlock from "../main-block/MainBlock"
import { ISlide } from "../../types/types"

export default function Main(){
	const [slideState, changeState] = useState<ISlide>(
		{
			activeSlide: undefined,
			slides: [
				{
					id: 1,
					title:'CREATE <span>X</span><br/>CONSTRUCTION',
					description: 'Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.'
				}, 
				{
					id: 2,
					title: 'CREATE <span>NEW</span><br/> IDEAS',
					description: 'Lorem ipsum dolor sit beatae voluptates est laboriosam illo laborum, quasi cumque debitis facere inventore fugit at. Recusandae, excepturi? Nesciunt'
				}, 
				{
					id: 3,
					title: 'MAKE PLANS',
					description: 'amet consectetur adipisicing elit. Consequatur rerum exercitationem iusto modi maxime'
				}, 
				{
					id: 4,
					title: 'LOOK IN THE<br/> <span>FUTURE</span>',
					description: 'dolor sit amet consectetur adipisicing elit. Molestias reiciendis sint, provident laborum rem dignissimos beatae suscipit dolorum sapiente nihil nostrum, ea ratione voluptatibus aspernatur magnam deserunt? Eius, vitae quod?'
				}
			]
		}
	)
	return (
		<>
			<main style={{backgroundImage:`url(${bgUrl_1})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover"
			}} className={main.main}>
				<div className={main.main__arrow}>
					<span>←</span>
				</div>
				<div className={main.main__container}>
					<div className={main.main__wrapper}>
						<MainBlock slideState={slideState} />
						<div className={main.main__slider}>
							<Slider slideState={slideState} changeState={changeState} />
						</div>
					</div>
				</div>
				<div className={main.main__arrow}>
					<span>→</span>
				</div>
			</main>
		</>
	)
}