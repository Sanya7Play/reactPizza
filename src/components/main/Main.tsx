import Card from "../card/Card";
import Categories from "../buttons/Category";
import {useEffect, useState} from "react";
import axios from "axios";
import {IPizzaArray} from "./main.types";


export default function Main(){

	const [pizza, setPizza] = useState<IPizzaArray[]>([]);
	const [category, setCategory] = useState<string>("Все");
	useEffect(() => {
		const fetchData = async () =>{
			try {

				const url = category === "Все" ? 'https://a5711d9821991906.mokky.dev/item' : `https://a5711d9821991906.mokky.dev/item?category=${category}`;

				const response = await axios.get<IPizzaArray[]>(url);
				setPizza(response.data);

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



	return (
		<div className='main'>
			<Categories setCategoriy={setCategory} />
			<div className='main-header'>
				<h1>Все пиццы</h1>
			</div>
			<div className='main-content'>
				<div className='main-content-grid'>
					{pizza.map(item =>(
						<Card key={item.id} id={item.id} name={item.name} img={item.img} type={item.dough} size={item.size} price={item.price} />
					))}
				</div>
			</div>
		</div>
	)
}