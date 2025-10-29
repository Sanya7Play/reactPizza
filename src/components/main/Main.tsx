import Card from "../card/Card";
import Categories from "../buttons/Category";
import {useContext} from "react";
import {AppContext} from "../../App";

export default function Main() {
	const ctx = useContext(AppContext)
	if (!ctx) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}

	const { setCategory, pizza, addToCart, order} = ctx;
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
							order={order}
						/>
					))}
				</div>
			</div>
		</div>
	)
}