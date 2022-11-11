import Profile from "../Assets/Images/Profile.png";

import "../Assets/CSS/Setting.css";

function Setting() {
	return (
		<div className="Setting">
			<div className="Setting-Div">
				<div className="Setting-Layer1">
					<h2>Profile Saya</h2>
					<p>Kelola informasi profil anda untuk mengontrol, melindungi dan mengamankan anda.</p>
				</div>
				<div className="Setting-Layer2">
					<form className="Setting-Form">
						<div className="Setting-Component">
							<label>Username</label>
							<label></label>
						</div>
						<div className="Setting-Component">
							<label>Nama</label>
							<input className="Input-Bar" />
						</div>
						<div className="Setting-Component">
							<label>Email</label>
							<input className="Input-Bar" />
						</div>
						<div className="Setting-Component">
							<label>No Telepon</label>
							<input className="Input-Bar" />
						</div>
						<div className="Setting-Component">
							<label>Nama Toko</label>
							<input className="Input-Bar" />
						</div>
						<div className="Setting-Component">
							<label>Jenis Kelamin</label>
							<div className="Radios">
								<input type="radio" name="contact" className="Input-Radio"/> Perempuan
								<input type="radio" name="contact" className="Input-Radio"/> Laki - Laki
							</div>
						</div>
						<button className="Setting-Submit">Submit</button>
					</form>
					<div className="Setting-Image">
						<img src={Profile} />
						<input type="file" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Setting;