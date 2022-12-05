import { Link } from "react-router-dom";

import Profile from "../Assets/Images/Profile.png";
import Chat from "../Assets/Images/Chat.png";
import Shop from "../Assets/Images/Shop.png";

function CardProfile() {
	return (
		<div className="CardProfile">
			<div className="CardProfile-Layer1">
				<div className="CardProfile-Image">
					<img src={Profile} />
				</div>
				<div className="CardProfile-Contents">
					<div className="CardProfile-Header">
						<h2>Admin</h2>
					</div>
					<div className="CardProfile-Buttons">
						<Link className="Kunjungi-Toko" to="/Store"><img src={Shop} /> Kunjungi Toko</Link>
					</div>
				</div>	
			</div>
			<div className="CardProfile-Layer2">
				<p>Joined Since 1st January 2122</p>
			</div>
		</div>
	)
}

export default CardProfile