import CardButton from "./CardButton";
import {DOUGH_OPTIONS, IPizzaArray, SIZE_OPTIONS} from "../main/main.types";

type CardProps = {
	item: IPizzaArray;
	addToOrder: (item: IPizzaArray) => void;
};

export default function Card({item,addToOrder}:CardProps ){
	const { id, name, img, dough, size, price } = item;
	const aviableDough = Array.isArray(dough) ? dough : [];
	const aviableSize = Array.isArray(size) ? size : [];

	return(
		<div className='card' key={id}>
			<img src={img} alt={name}/>
			<h1>{name}</h1>
			<div className='card-buttons'>
				<div className='card-button-up'>
					{DOUGH_OPTIONS.map(dough => (
						<CardButton text={dough} disabled={!aviableDough.includes(dough)} />
					))}
				</div>
				<div className='card-button-down'>
					{SIZE_OPTIONS.map(size => (
						<CardButton text={`${size} cм`} disabled={!aviableSize.includes(size)}/>
					))}
				</div>
			</div>
			<div className='card-description'>
				<span>от {price} ₽</span>
				<button className='button-add-default' onClick={() => console.log('1')}>
					<img src="/img/addwhite.svg" alt="AddImage"/>
					<p>Добавить</p>
				</button>
			</div>
		</div>
	)
}