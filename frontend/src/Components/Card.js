import Card0 from "../Assets/Images/Plant-Card0.png";

import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';

function Card(props) {
	const dispatch = useDispatch()
	dispatch(setIndex(props.index))

	return (
		<div className="Card">
			<div className="Test">
				<img className="Card-Image" src={Card0} />
			</div>
			<div className="Card-Contents">
				<h3>{props.head}</h3>
				<p>{props.price}</p>
			</div>
		</div>
	)
}

export default Card