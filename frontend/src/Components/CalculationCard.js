import Ordered from "../Components/Ordered.js";

import Palm from "../Assets/Images/Palm-Product.jpg";
import Plant from "../Assets/Images/Plant-Card0.png";

function CalculationCard() {
	const data = [
		{
			image: Palm,
			name: "Chrysalidocarpus lutescens",
			unit_price: 90000,
			amount: 50,
		},
		{
			image: Plant,
			name: "Plant",
			unit_price: 90000,
			amount: 2,
		}
	]


	data.forEach(e => {
		e["subtotal"] = e.unit_price * e.amount
	})

	let totalSum = 0

	data.forEach(e => {
		totalSum += e.subtotal
	})

	return (
		<div className="CalculationCard">
			<table>
				<thead>
					<tr>
						<th>Product Ordered</th>
						<th>Unit Price</th>
						<th>Amount</th>
						<th>SubTotal</th>
					</tr>
				</thead>
				<tbody>
					{data.map((e, i) => (
						<Ordered image={e.image} name={e.name} unit_price={e.unit_price} amount={e.amount} subtotal={e.subtotal} />
					))}
				</tbody>
			</table>
			<div className="Total">
				<h2>Total : {totalSum}</h2>
				<button>Buat Pesanan</button>
			</div>
		</div>
	)
}

export default CalculationCard