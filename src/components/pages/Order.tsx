import CartOrder from "./CartOrder";


export default function Order() {

	const items = [];
	return (
		<div>
			{items.length > 0 ? (<div className="order-container">
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
				<CartOrder/>
				<CartOrder/>
				<CartOrder/>
				<CartOrder/>
				<div className="order-footer">
					<div className="order-footer-quantity">
						<div className="order-footer-header">
							<h1>Всего пицц:</h1>
							<p> 3 шт.</p>
						</div>
						<div className="order-footer-price">
							<h1>Cумма заказа:</h1>
							<p>900 ₽</p>
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