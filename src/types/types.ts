export interface ISlide {
	activeSlide?: ISlideTemplate
	slides : ISlideTemplate[]

}

export interface ISlideTemplate {
	title: string
	description: string
	img: string
}

export interface IProps {
	title: string
	description: string
}

export interface IForm {
	inputType : string
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