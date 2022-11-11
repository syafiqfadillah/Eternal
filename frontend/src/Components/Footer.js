import Logo from "../Assets/Images/eternal-logo.png";

function Footer() {
	return (
		<div className="Footer">
			<div className="Footer-Layer1">
				<img src={Logo} />
			</div>
			<div className="Footer-Layer2">
				<p>Copyright 2022 all rights reserved</p>
			</div>
		</div>
	)
}

export default Footer