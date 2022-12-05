import Wishlist from '../Assets/Images/Wishlist.png';
import Cart from '../Assets/Images/Cart.png';

import { useSelector } from 'react-redux';

function CardProduct() {
	const byId = useSelector(state => state.counter.byId)

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
					<p>Kuantitas</p>
					<button>-</button>
					<p>1</p>
					<button>+</button>
					<p>Tersisa {byId.stock} Buah</p>
				</div>
				<div className="CardProduct-Buttons">
					<button className="Cart-Shortcut"><img src={Cart} alt="cart" />Masukan Ke Keranjang</button>
					<button className="Buy-Shortcut">Beli Sekarang</button>
				</div>
			</div>
		</div>
	)
}

export default CardProduct