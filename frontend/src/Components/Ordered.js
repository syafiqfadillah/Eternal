function Ordered(props) {
	return (
		<tr>
			<td><span className="Product"><img className="CalcImage" src={props.image} />{props.name}</span></td>
			<td>RP {props.unit_price}</td>
			<td>{props.amount}</td>
			<td>RP {props.subtotal}</td>
		</tr>
	)
}

export default Ordered