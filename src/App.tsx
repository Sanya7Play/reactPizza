
import './App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Routes,Route} from "react-router-dom";
import Order from "./components/pages/Order";
export default function App() {
	return(
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Main/>}/>
				<Route path="order" element={<Order/>}/>
			</Routes>
		</div>
	)
}