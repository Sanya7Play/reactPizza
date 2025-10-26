
interface ICardButton {
	text: string;
	className?: string;
	disabled: boolean;
}
function CardButton({text, disabled}:ICardButton) {

	const propsAdd = () =>{
		console.log('12')
	}
	return(
		<div>
			<button
				key={text}
				onClick={propsAdd}
				className={ disabled ? 'card-button-size-disabled' : 'card-button-size'}>
				{text}
			</button>
		</div>
	)
}
export default CardButton;