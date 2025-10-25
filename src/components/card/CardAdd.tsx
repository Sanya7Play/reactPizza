

interface CardAdd {
	added: boolean;
}
function CardAdd({added}: CardAdd) {
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
				<button className='button-add-default'>
					<img src="/img/addwhite.svg" alt="AddImage"/>
					<p>Добавить</p>
				</button>
			) }
		</div>
	)
}
export default CardAdd;