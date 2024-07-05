import React, { useEffect, useState } from "react"
import slider from './slider.module.scss'
import { ISlide } from "../../../types/types"

interface Props {
	slideState : ISlide,
	changeState : Function
}

export default function Slider({slideState, changeState} : Props){
	function toggleActive(index : number) {
		changeState({...slideState, activeSlide: slideState.slides[index]})
	}
	function toggleActiveStyles(index : number) {
		if(slideState.slides[index] === slideState.activeSlide) 
			return `${slider.slider__element} ${slider.active}`
		else
			return `${slider.slider__element}`
	}
	return (
		<>
			<div className={slider.slider__container}>
				{slideState.slides.map((slide, index) => (
					<div key={index} className={toggleActiveStyles(index)} onClick={() => toggleActive(index)}>
						<h2 className={slider.slider__number}>0{slide.id}</h2>
						<span className={slider.slider__line} />
					</div>
				))}
			</div>
		</>
	)
}