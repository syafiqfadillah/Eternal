import Customer from "../Assets/Images/Customer.png";

function CardComments(props) {
	return (
		<div className="CardComment">
			<div className="CardComment-Layer1">
				<img src={Customer} />
			</div>
			<div className="CardComment-Layer2">
				<h2>{props.username}</h2>
				<p>{props.review}</p>
			</div>
		</div>
	)
}

export default CardComments