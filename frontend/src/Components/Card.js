import Card0 from "../Assets/Images/Plant-Card0.png";

import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';

function Card(props) {
	let dispatch = useDispatch()

	return (
		<div className="Card" onClick={() => dispatch(setIndex(props.keys))}>
			<div className="Test">
				<img className="Card-Image" src={props.img} />
			</div>
			<div className="Card-Contents">
				<h3>{props.head}</h3>
				<p>${props.price}</p>
			</div>
		</div>
	)
}

export default Card