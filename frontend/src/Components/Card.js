import Card0 from "../Assets/Images/Plant-Card0.png";

function Card(props) {
	return (
		<div className="Card">
			<div className="Test">
				<img className="Card-Image" src={Card0} />
			</div>
			<div className="Card-Contents">
				<h3>{props.header}</h3>
				<p>{props.price}</p>
			</div>
		</div>
	)
}

export default Card