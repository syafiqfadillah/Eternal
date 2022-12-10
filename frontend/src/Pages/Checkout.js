import AddressCard from "../Components/AddressCard.js";
import CalculationCard from "../Components/CalculationCard.js";

import "../Assets/CSS/NavbarLogin.css";
import "../Assets/CSS/CalculationCard.css";
import "../Assets/CSS/Checkout.css";
import "../Assets/CSS/AddressCard.css";
import "../Assets/CSS/Footer.css";

function Checkout() {
	return (
		<div className="Checkout">
			<AddressCard />
			<CalculationCard />
		</div>
	)
}

export default Checkout