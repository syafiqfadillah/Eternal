import Search from "../Assets/Images/Search.png";
import Logo from "../Assets/Images/eternal-logo.png";

function Navbar() {
	return (
		<div className="Navbar">
			<div className="Navbar-Layer1">
				<img className="Navbar-Eternal" src={Logo} />
				<div className="Navbar-Layer2">
					<input className="Navbar-Search" type="image" src={Search}/>
					<button className="Navbar-Login">Login</button>
					<button className="Navbar-Register">Register</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar