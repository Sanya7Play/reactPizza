

import {Link} from 'react-router-dom'
import {useCart} from "../hooks/useCart";


export default function Header() {

	const cart = useCart() ?? { totalPrice: 0, countTotal: 0, isEmpty: true };
	const { totalPrice, countTotal, isEmpty } = cart;
	return (
		<div className="header">
			<div className="header-left">
				<Link to="/">
					<img src="/img/pizza-logo.svg" alt="PizzaLogo" width={38} height={38} />
				</Link>
				<div className="header-description">
					<h1>REACT PIZZA</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
			<div className="header-right">
				<Link to="/order">
					{isEmpty ? (<button className='button-market'>
						<span>{0} ₽</span>
						<p className="cart-btn-divider"/>
						<div className='market-items'>
							<img src="/img/cart.svg" alt="CartLogo" width={16} height={16} />
							<p>{0}</p>
						</div>
					</button>) : (
						<>
							<button className='button-market'>
								<span>{totalPrice} ₽</span>
								<p className="cart-btn-divider"/>
								<div className='market-items'>
									<img src="/img/cart.svg" alt="CartLogo" width={16} height={16} />
									<p>{countTotal}</p>
								</div>
							</button>
						</>
					)}
				</Link>
			</div>
		</div>
	)
}