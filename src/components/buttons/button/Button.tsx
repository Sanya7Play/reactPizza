import {useState} from "react";

type Props = {
	setCategory: (category: string) => void;
}
export default function Button({setCategory}: Props) {

	const buttonArray = ['Все', 'Мясные', 'Вегетарианская', 'Гриль' , 'Острые', 'Закрытые'];

	const [active, setActive] = useState<string>(buttonArray[0] ?? "");
	const handleClick = (button: string) => {
		setCategory(button);
		setActive(button);
	}
	return (
		<div className='main-button'>
			{buttonArray.map((button) => (
				<button 
					key={button} 
					className={`sort-buttons ${active === button ? 'active' : ''}`}
					onClick={() => handleClick(button)}>
					{button}
				</button>
			))}
		</div>
	)
}