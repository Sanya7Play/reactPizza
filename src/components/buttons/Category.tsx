import Button from "./button/Button";

type Props = {
	setCategory: (category: string) => void;
}
export default function Categories ({setCategory}: Props){
	return (
		<div className='main-buttons'>
			<Button setCategory={setCategory}/>
			<div className='main-button-sort'>
				<img src="/img/arrow-top.svg" alt="ArrowTop" width={10} height={5} />
				<span>Cортировка по: </span>
				<p>популярности</p>
			</div>
		</div>
	)
}