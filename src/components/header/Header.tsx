

import {Link} from 'react-router-dom'


export default function Header() {
	return (
		<div className="header">
			<div className="header-left">
				<Link to="/">
					<img src="/img/pizza-logo.svg" alt="Pizza Logo" width={38} height={38} />
				</Link>
				<div className="header-description">
					<h1>REACT PIZZA</h1>
					<p>самая вкусная пицца во вселенной</p>
				</div>
			</div>
			<div className="header-right">
				<Link to="/order">
					<button className='button-market'>
						<span>520 ₽</span>
						<div className='market-items'>
							<img src="/img/cart.svg" alt="Cart Logo" width={16} height={16} />
							<p>3</p>
						</div>
					</button>
				</Link>
			</div>
		</div>
	)
}