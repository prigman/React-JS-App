export interface ISlide {
	activeSlide?: ISlideTemplate
	slides : ISlideTemplate[]

}

export interface ISlideTemplate {
	id: number
	title: string
	description: string
	bg: {}
}

export interface IProps {
	title: string,
	description: string
}

export interface IForm {
	inputType : string
	inputId : string
	inputName : string
	inputPlaceholder : string
	text? : string
}

export interface IHeader {
	fixed_class? : boolean
	about? : boolean
	services? : boolean
	work? : boolean
	news? : boolean
	contacts? : boolean
}