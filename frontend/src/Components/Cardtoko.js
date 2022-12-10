import imgtoko from "../Assets/Images/Plant-Card0.png";


const Card= (props) => {
	const byId = useSelector(state => state.counter.byId)

	return (
		<div className="Cardtoko">
			<div className="imgprodtoko">
				<img className="imgprod" src={byId.image} />
			</div>
			
				<h4><a href="" className="namaproduk">{byId.title}</a></h4>
				<p>{byId.price}</p>
			
		</div>
	)
}

export default Card