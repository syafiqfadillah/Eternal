import Logo from "../Assets/Images/eternal-logo.png";

import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
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
				<button className="Navbar-Login" onClick={() => nav("/Login")}>Login</button>
				<button className="Navbar-Register" onClick={() => nav("/Signup")}>Register</button>
			</div>
		</div>
	)
}

export default Navbar