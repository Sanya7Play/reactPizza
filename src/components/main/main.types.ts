export interface IPizzaArray {
	id:number;
	category: string;
	name: string;
	img: string;
	dough: string[];
	size: string[];
	price: number;
}
export type Order = IPizzaArray &{
	added: boolean;
}
export const DOUGH_OPTIONS =  ["тонкое", "традиционное"] as const;
export const SIZE_OPTIONS = ['26', '30', '40'] as const;