import React, { useEffect, useState } from "react"
import './slider.scss'
import { ISlide } from "../../models"

export default function Slider(){
	const [slideState, changeState] = useState({
		activeSlide: {id: 1},
		slides: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
	});
	useEffect(() => {
		changeState({...slideState, activeSlide: slideState.slides[0]});
	}, []);
	function toggleActive(index) {
		changeState({...slideState, activeSlide: slideState.slides[index]})
	}
	function toggleActiveStyles(index) {
		if(slideState.slides[index] === slideState.activeSlide) 
			return "slider__element active"
		else
			return "slider__element"
	}
	return (
		<div className="slider__container">
			{slideState.slides.map((elements, index) => (
				<div key={index} className={toggleActiveStyles(index)} onClick={() => toggleActive(index)}>
					<h2 className="slider__page-number">0{index+1}</h2>
					<span className="slider__line"></span>
				</div>
			))}
		</div>
	)
}