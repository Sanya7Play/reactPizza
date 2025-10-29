import {useContext} from "react";
import {AppContext} from "../../App";

export const useCart = () => {
	const ctx = useContext(AppContext);
	if (!ctx) return;
	const { order } = ctx;
	const totalPrice: number = order.reduce((acc, item) => acc + item.price * item.qty, 0);
	const countTotal: number = order.reduce((acc, item) => acc + item.qty, 0);

	return {totalPrice, countTotal, isEmpty: countTotal === 0};
}