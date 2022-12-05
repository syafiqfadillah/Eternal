import { Link } from "react-router-dom";

function Card({props}) {
	return (
		<Link to={`/Product/?id=${props.id}`}>
			<div className="Card">
				<div className="Test">
					<img className="Card-Image" src={props.images[0]} alt="product"/>
				</div>
				<div className="Card-Contents">
					<h3>{props.title}</h3>
					<p>${props.price}</p>
				</div>
			</div>
		</Link>
	)
}

export default Card