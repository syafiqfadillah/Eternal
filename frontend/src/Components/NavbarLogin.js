import Search from "../Assets/Images/Search.png";
import Logo from "../Assets/Images/eternal-logo.png";
import Profile from "../Assets/Images/Profile.png";
import Cart from "../Assets/Images/Cart.png";
import Wishlist from "../Assets/Images/Wishlist.png";

import { useNavigate, NavLink } from "react-router-dom";

function NavbarLogin() {
	function search(e) {
		localStorage.setItem("keyword", e.target[0].value)

		nav("/Result")
	}

	let nav = useNavigate()

	return (
		<div className="Navbar">
			<div className="Navbar-Layer1">
				<NavLink to="/">{<img className="Navbar-Eternal" src={Logo} />}</NavLink>
			</div>
			<div className="Navbar-Layer2">
				<form className="Search" onSubmit={search}>
					<input className="SearchBar" placeholder="Search" />
					<input className="Navbar-Search" type="submit" value="Search" />
				</form>
				<NavLink to="/Cart">{<input className="Navbar-Cart" type="image" src={Cart} />}</NavLink>
				<input className="Navbar-Profile" type="image" src={Profile} />
			</div>
		</div>
	)
}

export default NavbarLogin