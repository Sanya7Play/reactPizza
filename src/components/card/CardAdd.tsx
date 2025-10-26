

interface ICardAdd {
	added: boolean;
}
export default function CardAdd({added}: ICardAdd) {
	const addToOrder = () => {
		console.log('addToOrder');
	}
	return (
		<div>
			{added ? (
				<>
					<button className='button-add'>
						<img src="/img/plus.svg" alt="AddImage"/>
						<p>Добавить</p>
						<span>2</span>
					</button>
				</>

			) : (
				<button className='button-add-default' onClick={addToOrder}>
					<img src="/img/addwhite.svg" alt="AddImage"/>
					<p>Добавить</p>
				</button>
			) }
		</div>
	)
}