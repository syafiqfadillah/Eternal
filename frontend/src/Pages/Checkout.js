import NavbarLogin from "../Components/NavbarLogin.js";
import AddressCard from "../Components/AddressCard.js";
import CalculationCard from "../Components/CalculationCard.js";
import Footer from "../Components/Footer.js";

import "../Assets/CSS/NavbarLogin.css";
import "../Assets/CSS/CalculationCard.css";
import "../Assets/CSS/Checkout.css";
import "../Assets/CSS/AddressCard.css";
import "../Assets/CSS/Footer.css";

function Checkout() {
	return (
		<div className="Checkout">
			<NavbarLogin />
			<AddressCard />
			<CalculationCard />
			<Footer />
		</div>
	)
}

export default Checkout