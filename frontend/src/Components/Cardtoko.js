import imgtoko from "../Assets/Images/Plant-Card0.png";

const Card= (props) => {
	return (
		<div className="Cardtoko">
			<div className="imgprodtoko">
				<img className="imgprod" src={imgtoko} />
			</div>
			
				<h4><a href="" className="namaproduk">{props.nama}</a></h4>
				<p>{props.harga}</p>
			
		</div>
	)
}

export default Card