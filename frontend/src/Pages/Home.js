import { Link } from "react-router-dom";

import Label from "../Components/Label.js";
import SwiperMod from "../Components/SwiperMod.js";
import Reason from "../Components/Reason.js";

import '../Assets/CSS/Home.css';
import '../Assets/CSS/Navbar.css';
import '../Assets/CSS/NavbarLogin.css';
import '../Assets/CSS/Label.css';
import '../Assets/CSS/Card.css';
import '../Assets/CSS/SwiperMod.css';
import '../Assets/CSS/Reason.css';
import '../Assets/CSS/Footer.css';

import Plant from "../Assets/Images/Plant.jpg"

function Home() {
	return (
		<div className="Home">
			<div className="Home-Child">
				<div className="Home-Layer1">
					<h1 className="Home-Header1">Plants Make</h1>
					<h1 className="Home-Header2">Better Life</h1>
					<p className="Home-Description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<Link to="/Explore" className="Home-Explorer">Explorer</Link>
				</div>
				<div className="Home-Layer2">
					<img src={Plant} alt="product"/>
				</div>
			</div>
			<Label />
			<div className="Slider">
				<div className="Products-Header">
					<h2>Products</h2>
					<SwiperMod/>
				</div>
			</div>
			<Reason />
		</div>
	)
}

export default Home