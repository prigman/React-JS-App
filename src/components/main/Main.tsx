import React, { useState } from "react"
import './main.scss'
import bgUrl_1 from "/img/bg-image.jpg"
import Slider from "./slider/Slider"
import MainBlock from "../main-block/MainBlock"
import { ISlide } from "../models"

export default function Main(){
	return (
		<main style={{backgroundImage:`url(${bgUrl_1})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"
		}} className="main">
			<div className="main__container">
				<div className="main__wrapper">
					<MainBlock />
					<div className="main__slider">
						<Slider/>
					</div>
				</div>
			</div>
		</main>
	)
}