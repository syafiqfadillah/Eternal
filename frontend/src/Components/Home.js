import Navbar from "./Navbar.js";
import NavbarLogin from "./NavbarLogin.js";
import Label from "./Label.js";
import SwiperMod from "./SwiperMod.js";
import Reason from "./Reason.js";
import Footer from "./Footer.js";

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
	const cards = [
	    {
	      head: "This is a Tree",
	      price: "Rp 100.000"
	    },
	    {
	      head: "This is a not a Tree",
	      price: "Rp 50.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	      {
	      head: "This is a Tree",
	      price: "Rp 100.000"
	    },
	    {
	      head: "This is a not a Tree",
	      price: "Rp 50.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
	    {
	      head: "This is a Tree",
	      price: "Rp 10.000.000"
	    },
  	]

	return (
		<div className="Home">
			<NavbarLogin />
			<div className="Home-Child">
				<div className="Home-Layer1">
					<h1 className="Home-Header1">Plants Make</h1>
					<h1 className="Home-Header2">Better Life</h1>
					<p className="Home-Description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<button className="Home-Explorer">Explorer</button>
				</div>
				<div className="Home-Layer2">
					<img src={Plant} />
				</div>
			</div>
			<Label />
			<div className="Slider">
		        <div className="Products-Header">
		          <h2>Products</h2>
		          <SwiperMod data={cards} />
		        </div>
	      	</div>
			<Reason />
			<Footer />
		</div>
	)
}

export default Home