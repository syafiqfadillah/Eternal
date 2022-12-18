import Wishlist from '../Assets/Images/Wishlist.png';
import Cart from '../Assets/Images/Cart.png';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCart } from '../Redux/counterSlice';

function CardProduct() {
	const dispatch = useDispatch()
	const [sum, setSum] = useState(1)
	const byId = useSelector(state => state.counter.byId)

	function add() {
		if (sum < byId.stock) {
			setSum(sum + 1)
		}
	}

	function less() {
		if (sum > 1) {
			setSum(sum - 1)
		}
	}

	console.log(window.screen.availWidth)

	return (
		<div className="CardProduct">
			<div className="CardProduct-Layer1">
				<div className="Image-Product">
					<img src={byId.image} alt="product"/>
				</div>
				<div className="Wishlist-Shortcut">
					<button className="Wishlist-Button"><img src={Wishlist} alt="wishlist" />Wishlist</button>
				</div>
			</div>
			<div className="CardProduct-Layer2">
				<div className="CardProduct-Contents">
					<h1 className="CardProduct-Header">{byId.title}</h1>
					<p>1 Terjual</p>
					<h1>${byId.price}</h1>
				</div>
				<div className="CardProduct-Kuantitas">
					<p className="Kuantitas">Kuantitas</p>
					<button onClick={less}>-</button>
					<p>{sum}</p>
					<button onClick={add}>+</button>
					<p className="Amount">Tersisa {byId.stock} Buah</p>
				</div>
				<div className="CardProduct-Buttons">
					<button className="Cart-Shortcut" onClick={() => dispatch(setCart(byId))}><img src={Cart} alt="cart" /></button>
					<button className="Buy-Shortcut">Beli</button>
				</div>
			</div>
		</div>
	)
}

export default CardProduct