import CardComment from "./CardComment.js";

function Comments() {
	const data = [
	{
		name: "Yudhistira Tama",
		review: "Saya Beli Tanaman"
	},
	{
		name: "Dimas Saputra",
		review: "Saya Nggak Beli Tanaman"
	},
	{
		name: "Dimas Saputra",
		review: "Saya Nggak Beli Tanaman"
	},
		{
		name: "Dimas Saputra",
		review: "Saya Nggak Beli Tanaman"
	},
			{
		name: "Dimas Saputra",
		review: "Saya Nggak Beli Tanaman"
	},
	]

	return (
		<div className="Comments">
			<h1>Comments</h1>
			{data.map((e, i) => (
				<CardComment key={i} username={e.name} review={e.review} />
			))}
		</div>
	)
}

export default Comments