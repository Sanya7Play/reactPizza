export default function CartOrder() {
	return (
		<div className="order-card">
			<div className="order-card-left">
				<img src="/assets/image5.png" alt="CartImage"/>
				<div className="order-card-details">
					<h1>Сырный цепленок</h1>
					<p>тонкое тесто, 26 см.</p>
				</div>
			</div>
			<div className="order-card-right">
				<div className="order-card-right-quantity">
					<button className='order-card-right-quantity-button'>
						<img src="/img/minus.png" alt="MinusImage"/>
					</button>
					<span>2</span>
					<button className='order-card-right-quantity-button'>
						<img src="/img/plus.svg" alt="PlusImage"/>
					</button>
				</div>
				<div className="order-card-right-price">
					<p>770 ₽</p>
				</div>
				<div className="order-card-right-delete">
					<button className="order-card-right-delete-button">
						<img src="/img/crest.png" alt=""/>
					</button>
				</div>
			</div>
		</div>
	)
}