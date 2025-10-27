export interface IPizzaArray {
	id:number;
	category: string;
	name: string;
	img: string;
	dough: string[];
	size: string[];
	price: number;
}
export interface Order {
	id?: number;          // id записи на сервере (придёт после POST)
	parentId: number;     // id товара
	name: string;
	img: string;
	price: number;
	dough: string;
	size: string;
	qty: number;          // количество
	added: boolean;
}
export type TAppContext = Order & IPizzaArray
export const DOUGH_OPTIONS =  ["тонкое", "традиционное"] as const;
export const SIZE_OPTIONS = ['26', '30', '40'] as const;