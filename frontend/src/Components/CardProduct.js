import PalmProduct from '../Assets/Images/Palm-Product.jpg';
import Wishlist from '../Assets/Images/Wishlist.png';
import Cart from '../Assets/Images/Cart.png';

function CardProduct() {
	return (
		<div className="CardProduct">
			<div className="CardProduct-Layer1">
				<div className="Image-Product">
					<img src={PalmProduct} />
				</div>
				<div className="Wishlist-Shortcut">
					<button className="Wishlist-Button"><img src={Wishlist} />Wishlist</button>
				</div>
			</div>
			<div className="CardProduct-Layer2">
				<div className="CardProduct-Contents">
					<h1 className="CardProduct-Header">Chrysalidocarpus lutescens</h1>
					<p>1 Terjual</p>
					<h1>RP 900.000</h1>
				</div>
				<div className="CardProduct-Kuantitas">
					<p>Kuantitas</p>
					<button>-</button>
					<p>1</p>
					<button>+</button>
					<p>Tersisa 23132 Buah</p>
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