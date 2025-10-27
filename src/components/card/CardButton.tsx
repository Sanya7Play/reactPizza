
interface ICardButton {
	id: string;
	text: string;
	className?: string;
	disabled: boolean;
}
export interface IOptionsPizza {
	dough: string;
	size: string;
}
export let optionsPizza:IOptionsPizza = {dough: '', size: ''};
function CardButton({text, disabled}:ICardButton) {

	const propsAdd = () => {
		if(text === 'традиционное' || text === 'тонкое'){
			optionsPizza.dough = text;
		}
		else{
			optionsPizza.size = text;
		}
		console.log(optionsPizza);
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