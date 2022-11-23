import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';

function CardDescription() {
	const cardData = useSelector((state) => state.counter.cardData)
	const index = useSelector((state) => state.counter.index)

	return (
		<div className="CardDescription">
			<h1>Description</h1>
			<p className="CardDescription-Content">
				{cardData[index].description}
			</p>
		</div>
	)	
}

export default CardDescription