import React, { useEffect, useState } from "react"
import slider from './slider.module.scss'
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
			return `${slider.slider__element} ${slider.active}`
		else
			return `${slider.slider__element}`
	}
	return (
		<>
			<div className={slider.slider__container}>
				{slideState.slides.map((elements, index) => (
					<div key={index} className={toggleActiveStyles(index)} onClick={() => toggleActive(index)}>
						<h2 className={slider.slider__number}>0{index+1}</h2>
						<span className={slider.slider__line} />
					</div>
				))}
			</div>
		</>
	)
}