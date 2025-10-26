import Card from "../card/Card";
import Categories from "../buttons/Category";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {IPizzaArray, Order} from "./main.types";
import {createContext} from "react";

type AppCtx = {
	addToCart: (item: IPizzaArray) => void;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

// Контекст: по умолчанию null, чтобы ловить использование вне Provider
export const AppContext = createContext<AppCtx | null>(null);
export default function Main(){

	const [pizza, setPizza] = useState<IPizzaArray[]>([]);
	const [category, setCategory] = useState<string>("Все");
	const [order, setOrders] = useState<Order[]>([]);
	useEffect(() => {
		const fetchData = async () =>{
			try {
				const url = category === "Все" ? 'https://a5711d9821991906.mokky.dev/item' : `https://a5711d9821991906.mokky.dev/item?category=${category}`;
				const responseItem = await axios.get<IPizzaArray[]>(url);
				console.log(responseItem.data);
				setPizza(responseItem.data);
			}
			catch (error) {
				console.log('Error: ', error);
			}
			finally {
				console.log('Data: ', pizza);
			}
		}
		fetchData();
	}, [category])

	useEffect(() => {
		const fetchData = async () =>{
			try {
				const responseOrder = await axios.get<Order[]>('https://a5711d9821991906.mokky.dev/orders');
				setOrders(responseOrder.data);
				console.log(responseOrder.data);
			}
			catch (error) {
				console.log('Error: ', error);
			}
			finally {
				console.log('Data');
			}
		}
		fetchData();
	},[])

	const addToCart = (item :IPizzaArray) => {
		console.log(item);
	}

	return (
		<AppContext.Provider value={{addToCart,setOrders,setCategory}}>
			<div className='main'>
				<Categories setCategory={setCategory} />
				<div className='main-header'>
					<h1>Все пиццы</h1>
				</div>
				<div className='main-content'>
					<div className='main-content-grid'>
						{pizza.map(item =>(
							<Card
								key={item.id}
								item={item}
								addToOrder={addToCart}
							/>
						))}
					</div>
				</div>
			</div>
		</AppContext.Provider>

	)
}