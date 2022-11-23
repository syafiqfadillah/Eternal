import PalmProduct from '../Assets/Images/Palm-Product.jpg';
import Wishlist from '../Assets/Images/Wishlist.png';
import Cart from '../Assets/Images/Cart.png';

import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';

function CardProduct() {
	const cardData = useSelector((state) => state.counter.cardData)
	const index = useSelector((state) => state.counter.index)

	return (
		<div className="CardProduct">
			<div className="CardProduct-Layer1">
				<div className="Image-Product">
					<img src={cardData[index].images[0]} />
				</div>
				<div className="Wishlist-Shortcut">
					<button className="Wishlist-Button"><img src={Wishlist} />Wishlist</button>
				</div>
			</div>
			<div className="CardProduct-Layer2">
				<div className="CardProduct-Contents">
					<h1 className="CardProduct-Header">{cardData[index].title}</h1>
					<p>1 Terjual</p>
					<h1>${cardData[index].price}</h1>
				</div>
				<div className="CardProduct-Kuantitas">
					<p>Kuantitas</p>
					<button>-</button>
					<p>1</p>
					<button>+</button>
					<p>Tersisa {cardData[index].stock} Buah</p>
				</div>
				<div className="CardProduct-Buttons">
					<button className="Cart-Shortcut"><img src={Cart} />Masukan Ke Keranjang</button>
					<button className="Buy-Shortcut">Beli Sekarang</button>
				</div>
			</div>
		</div>
	)
}

export default CardProduct