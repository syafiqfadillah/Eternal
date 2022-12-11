import { useNavigate } from "react-router-dom";

import Profile from "../Assets/Images/Profile.png";
import Shop from "../Assets/Images/Shop.png";

function CardProfile() {
	const nav = useNavigate()

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
						<button className="Kunjungi-Toko" onClick={() => nav("/Store", { state: "/Store" })}><img src={Shop} /> Kunjungi Toko</button>
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