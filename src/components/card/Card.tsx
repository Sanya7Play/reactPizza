import CardButton from "./CardButton";
import {DOUGH_OPTIONS} from "../main/main.types";
import {SIZE_OPTIONS} from "../main/main.types";
import CardAdd from "./CardAdd";


interface ICard {
	id: number;
	name: string;
	img: string;
	type: string[];
	size: string[];
	price: number;
}
export default function Card({id, name, img, type, size, price}:ICard ){

	const aviableDough = Array.isArray(type) ? type : [];
	const aviableSize = Array.isArray(size) ? size : [];
	return(
		<div className='card' key={id} onClick={() => console.log(id)}>
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
						<CardButton text={`${size} cм`} disabled={!aviableSize.includes(size)} />
					))}
				</div>
			</div>
			<div className='card-description'>
				<span>от {price} ₽</span>
				<CardAdd added={false} />
			</div>
		</div>
	)
}