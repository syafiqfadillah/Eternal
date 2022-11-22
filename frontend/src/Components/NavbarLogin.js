import Search from "../Assets/Images/Search.png";
import Logo from "../Assets/Images/eternal-logo.png";
import Profile from "../Assets/Images/Profile.png";
import Cart from "../Assets/Images/Cart.png";
import Wishlist from "../Assets/Images/Wishlist.png";

import { NavLink } from "react-router-dom";

function NavbarLogin() {
	return (
		<div className="Navbar">
			<div className="Navbar-Layer1">
				<NavLink to="/">{<img className="Navbar-Eternal" src={Logo} />}</NavLink>
				<div className="Navbar-Layer2">
					<input className="Navbar-Search" type="image" src={Search} />
					<NavLink to="/Cart">{<input className="Navbar-Cart" type="image" src={Cart} />}</NavLink>
					<input className="Navbar-Profile" type="image" src={Profile} />
				</div>
			</div>
		</div>
	)
}

export default NavbarLogin