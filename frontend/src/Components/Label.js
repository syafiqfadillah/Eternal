import Logo from '../Assets/Images/eternal-logo2.png';
import PlantLabel from '../Assets/Images/Plant-Label.png';

function Label() {
	return (
		<div className="Label">
			<img className="LogoLabel" src={Logo} />
			<img className="PlantLabel" src={PlantLabel} />
			<h2>
				Set the scene and welcome loved <br /> ones with thoughtful touches of greenery. <br />
				Enjoy online delivery on your order.
			</h2>
		</div>
	)
}

export default Label