import Logo from "../Assets/Images/eternal-logo.png";
import Profile from "../Assets/Images/Profile.png";
import Cart from "../Assets/Images/Cart.png";

import { useNavigate } from "react-router-dom";

function NavbarLogin() {
	function search(e) {
		localStorage.setItem("keyword", e.target[0].value)

		nav("/Result")
	}

	let nav = useNavigate()

	return (
		<div className="Navbar">
			<div className="Navbar-Layer1">
				<button onClick={() => nav("/", { state: "/" })}>{<img className="Navbar-Eternal" src={Logo} />}</button>
			</div>
			<div className="Navbar-Layer2">
				<form className="Search" onSubmit={search}>
					<input className="SearchBar" placeholder="Search" />
					<input className="Navbar-Search" type="submit" value="Search" />
				</form>
				<button onClick={() => nav("/Cart", { state: "/Cart" })}>{<input className="Navbar-Cart" type="image" src={Cart} />}</button>
				<input className="Navbar-Profile" type="image" src={Profile} />
			</div>
		</div>
	)
}

export default NavbarLogin