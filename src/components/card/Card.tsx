
import {DOUGH_OPTIONS, IPizzaArray, Order, SIZE_OPTIONS} from "../main/main.types";
import CardButton, {IOptionsPizza, optionsPizza} from "./CardButton";



type CardProps = {
	order : Order[];
	item: IPizzaArray;
	addToOrder: (item: IPizzaArray, options: IOptionsPizza) => void;
};

export default function Card({item,addToOrder,order}:CardProps ){

	const addOrder = order.find(obj => obj.parentId === item.id);
	console.log(addOrder);

	const { id, name, img, dough, size, price } = item;
	const aviableDough = Array.isArray(dough) ? dough : [];
	const aviableSize = Array.isArray(size) ? size : [];

	const handleAdd = () => {
		addToOrder(item, optionsPizza)
	}
	return(
		<div className='card' key={id}>
			<img src={img} alt={name}/>
			<h1>{name}</h1>
			<div className='card-buttons'>
				<div className='card-button-up'>
					{DOUGH_OPTIONS.map((dough) => (
						<CardButton id={dough} text={dough} disabled={!aviableDough.includes(dough)} />
					))}
				</div>
				<div className='card-button-down'>
					{SIZE_OPTIONS.map(size => (
						<CardButton id={size} text={`${size} cм`} disabled={!aviableSize.includes(size)}/>
					))}
				</div>
			</div>
			<div className='card-description'>
				<span>от {price} ₽</span>
				{addOrder ? (
					<>
						<button className='button-add' onClick={handleAdd}>
							<img src="/img/plus.svg" alt="AddImage"/>
							<p>Добавить</p>
							<span>{addOrder.qty}</span>
						</button>
					</>
				):(
					<>
						<button className='button-add-default' onClick={handleAdd}>
							<img src="/img/addwhite.svg" alt="AddImage"/>
							<p>Добавить</p>
						</button>
					</>
				)}

			</div>
		</div>
	)
}