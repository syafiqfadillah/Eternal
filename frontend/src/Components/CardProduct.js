import PalmProduct from '../Assets/Images/Palm-Product.jpg';
import Wishlist from '../Assets/Images/Wishlist.png';

function CardProduct() {
	return (
		<div className="CardProduct">
			<div className="CardProduct-Layer1">
				<img src={PalmProduct} />
				<div className="Wishlist-Shortcut">
					<img src={Wishlist} />
					<button className="Wishlist-Button">Wishlist</button>
				</div>
			</div>
			<div className="CardProduct-Layer2">
			</div>
		</div>
	)
}

export default CardProduct