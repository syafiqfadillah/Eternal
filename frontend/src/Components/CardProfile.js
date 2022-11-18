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
						<button className="Chat"><img src={Chat} />Chat Penjual</button>
						<button className="Kunjungi-Toko"><img src={Shop} /> Kunjungi Toko</button>
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