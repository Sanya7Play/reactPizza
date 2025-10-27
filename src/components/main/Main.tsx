import Card from "../card/Card";
import Categories from "../buttons/Category";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {IPizzaArray, Order} from "./main.types";
import {IOptionsPizza} from "../card/CardButton";


export default function Main(){

	const [pizza, setPizza] = useState<IPizzaArray[]>([]);
	const [category, setCategory] = useState<string>("Все");
	const [order, setOrders] = useState<Order[]>([]);
	useEffect(() => {
		const fetchData = async () =>{
			try {
				const url =
					category === "Все"
						? "https://a5711d9821991906.mokky.dev/item"
						: `https://a5711d9821991906.mokky.dev/item?category=${encodeURIComponent(
							category
						)}`;
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
	}, [category]);

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
	}, []);

	const addToCart = async (product :IPizzaArray, optionsPizza: IOptionsPizza) => {
		try {
			const findItem: Order| undefined = order.find(obj => (
				obj.parentId === product.id && obj.dough === optionsPizza.dough && obj.size === optionsPizza.size));

			if (findItem) {
				const orderId: number | undefined = findItem.id;
				const qtyOrder = {
					qty: findItem.qty + 1
				}
				setOrders(prev =>
					prev.map(obj => (obj === findItem ? { ...obj, qty: (obj.qty ?? 1) + 1 } : obj))
				);
				const {data} = await axios.patch(`https://a5711d9821991906.mokky.dev/orders/${orderId}`, qtyOrder);
				console.log('Обновлен')
				console.log(data);
			}
			else{
				const newOrder = {
					parentId: product.id,
					name: product.name,
					img: product.img,
					price: product.price,
					dough: optionsPizza.dough,
					size: optionsPizza.size,
					qty: 1,
					added: true
				}
				setOrders(prev => [...prev, newOrder]);
				const {data} = await axios.post('https://a5711d9821991906.mokky.dev/orders', newOrder);
				console.log('Добавлен');
				console.log(data);
				if (data?.id !== null){
					setOrders(prev =>
						prev.map(item => (item.parentId === data.parentId ? {...item, id: data.id } : item))
					);
				}
			}
		}
		catch (error) {
			console.log('Ошибка добавления в корзину ', error);
		}
	};

	return (
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
							order = {order}
						/>
					))}
				</div>
			</div>
		</div>

	)
}