import CardProduct from "../Components/CardProduct.js";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import CardProfile from "../Components/CardProfile.js";
import CardDescription from "../Components/CardDescription.js";
import Comments from "../Components/Comments.js";

import "../Assets/CSS/DetailProduct.css";
import "../Assets/CSS/CardProduct.css"; 
import "../Assets/CSS/Navbar.css"; 
import "../Assets/CSS/Footer.css";
import "../Assets/CSS/CardProfile.css";
import "../Assets/CSS/CardDescription.css";
import "../Assets/CSS/Comments.css";

function DetailProduct() {
	return (
		<div className="DetailProduct">
			<Navbar />
			<CardProduct />
			<CardProfile />
			<CardDescription />
			<Comments />
			<Footer />
		</div>
	)
}

export default DetailProduct 