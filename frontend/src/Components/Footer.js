import Logo from "../Assets/Images/eternal-logo.png";
import Instagram from "../Assets/Images/Instagram.png";
import Facebook from "../Assets/Images/Facebook.png";
import { useNavigate } from "react-router-dom";

function Footer() {
	const navigate = useNavigate()

	return (
		<div className="Footer">
			<div className="Footer-Layer1">
				<div className="Footer-Logo">
					<button onClick={() => navigate("/", {state: "/"})}><img src={Logo} /></button>
				</div>
				<div className="Social-Media">
					<a href="https://www.google.com"><img src={Instagram} /></a>
					<a href="https://www.google.com"><img src={Facebook} /></a>
				</div>
			</div>
			<div className="Footer-Layer2">
				<p>Copyright 2022 all rights reserved</p>
			</div>
		</div>
	)
}

export default Footer