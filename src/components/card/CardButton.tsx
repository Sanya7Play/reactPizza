
interface ICardButton {
	text: string;
	className?: string;
	disabled: boolean;
}


function CardButton({text, disabled}:ICardButton) {
	return(
		<div>
			<button key={text} className={ disabled ? 'card-button-size-disabled' : 'card-button-size'}>
				{text}
			</button>
		</div>
	)
}
export default CardButton;