import CartOrder from "./CartOrder";
import {useContext} from "react";
import {AppContext} from "../../App";
import {useCart} from "../hooks/useCart";


export default function Orders() {

	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within an AppContextProvider');
	}
	const { order, onChangeQty, onRemoveCart } = context;

	const cart = useCart() ?? { totalPrice: 0, countTotal: 0, isEmpty: true };
	const { totalPrice, countTotal } = cart;

	return (
		<div>
			{order.length > 0 ? (<div className="order-container">
				<div className="header-order">
					<div className="order-left">
						<img src="/img/iconfinder_shopping-cart_2561279%201.png" alt="CartImage"/>
						<h1>Корзина</h1>
					</div>
					<div className="order-right">
						<img src="/img/trash.svg" alt="TrashImage"/>
						<p>Очистить корзину</p>
					</div>
				</div>
				{order.map(item => (
					<CartOrder obj={item} handleChange={onChangeQty} handleRemove={onRemoveCart}/>
				))}
				<div className="order-footer">
					<div className="order-footer-quantity">
						<div className="order-footer-header">
							<h1>Всего пицц:</h1>
							<p> {countTotal} шт.</p>
						</div>
						<div className="order-footer-price">
							<h1>Cумма заказа:</h1>
							<p>{totalPrice} ₽</p>
						</div>
					</div>
					<div className="order-footer-buttons">
						<button className="order-footer-back-button">
							<img src="/img/grey-arrow-left.svg" alt="BackButton"/>
							<p>Вернуться назад</p>
						</button>
						<button className='order-footer-pay'>Оплатить сейчас</button>
					</div>
				</div>
			</div>) : (
				<div className="order-header">
					<h1>Корзина пустая <img src="/img/😕.png" alt="OrderTrash"/> </h1>
					<p>Вероятней всего, вы не заказывали ещё пиццу.
						Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
					<img src="/img/empty-cart.png" alt="EmptyCart" width={300} height={255} />
				</div>)}

		</div>
	)
}