import Search from "../Assets/Images/Search.png";
import Logo from "../Assets/Images/eternal-logo.png";
import Profile from "../Assets/Images/Profile.png";
import Cart from "../Assets/Images/Cart.png";
import Wishlist from "../Assets/Images/Wishlist.png";

function NavbarLogin() {
	return (
		<div className="Navbar">
			<div className="Navbar-Layer1">
				<img className="Navbar-Eternal" src={Logo} />
				<div className="Navbar-Layer2">
					<input className="Navbar-Search" type="image" src={Search} />
					<input className="Navbar-Cart" type="image" src={Cart} />
					<input className="Navbar-Profile" type="image" src={Profile} />
				</div>
			</div>
		</div>
	)
}

export default NavbarLogin