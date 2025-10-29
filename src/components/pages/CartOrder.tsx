import {Order} from "../main/main.types";
import {useEffect, useState} from "react";



interface Props{
	obj: Order
	handleChange: (id: number, qty: number) => void;
	handleRemove: (id: number) => void;
}
export default function CartOrder({obj, handleChange, handleRemove}:Props) {

	const [qty, setQty] = useState<number>(obj.qty);

	useEffect(() => {
		setQty(obj.qty);
	},[obj.qty])
	const handlePlus = () => {
		const next = qty + 1;
		setQty(next);
		if(obj.id !== null) handleChange(obj.id!, next);
	}
	const handleMinus = () => {
		if (qty <= 1) return
			const next = qty - 1;
			setQty(next);
			if(obj.id !== null) handleChange(obj.id!, next);

	}
	const handleRemoveOrder = () => {
		if (obj.id !== null) handleRemove(obj.id!);
	}
	return (
		<div className="order-card" key={obj.id}>
			<div className="order-card-left">
				<img src={obj.img} alt="CartImage"/>
				<div className="order-card-details">
					<h1>{obj.name}</h1>
					<p>{obj.dough} тесто, {obj.size}.</p>
				</div>
			</div>
			<div className="order-card-right">
				<div className="order-card-right-quantity">
					<button className='order-card-right-quantity-button' onClick={handleMinus}>
						<img src="/img/minus.png" alt="MinusImage" />
					</button>
					<span>{obj.qty}</span>
					<button className='order-card-right-quantity-button' onClick={handlePlus}>
						<img src="/img/plus.svg" alt="PlusImage"/>
					</button>
				</div>
				<div className="order-card-right-price">
					<p>{obj.price * obj.qty} ₽</p>
				</div>
				<div className="order-card-right-delete">
					<button className="order-card-right-delete-button" onClick={handleRemoveOrder}>
						<img src="/img/crest.png" alt=""/>
					</button>
				</div>
			</div>
		</div>
	)
}