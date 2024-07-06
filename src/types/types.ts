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