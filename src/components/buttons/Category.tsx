import Button from "./button/Button";
import {useState} from "react";

type Props = {
	setCategory: (category: string) => void;
}
export default function Categories ({setCategory}: Props){
	const [sort, setSort] = useState(false);
	return (
		<div className='main-buttons'>
			<Button setCategory={setCategory}/>
			<div>
				<p></p>
			</div>
			<div className='main-button-sort'>
				<img src="/img/arrow-top.svg" alt="ArrowTop" width={10} height={5} />
				<span>Cортировка по: </span>
				<p>популярности</p>
			</div>
		</div>
	)
}