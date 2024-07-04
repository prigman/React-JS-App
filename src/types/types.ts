export interface ISlide {
	activeSlide?: {
		id: number
		title: string
		description: string
	},
	slides : {
		id: number
		title : string
		description: string
	}[],

}