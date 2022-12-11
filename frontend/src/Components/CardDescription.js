import { useSelector } from 'react-redux';

function CardDescription() {
	const byId = useSelector(state => state.counter.byId)

	return (
		<div className="CardDescription">
			<h1>Description</h1>
			<p className="CardDescription-Content">
				{byId.description}
			</p>
		</div>
	)	
}

export default CardDescription