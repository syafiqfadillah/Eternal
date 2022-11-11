import Plant from "../Assets/Images/Plant.jpg"

function Home() {
	return (
		<div className="Home">
			<div className="Home-Layer1">
				<h1 className="Home-Header1">Plants Make</h1>
				<h1 className="Home-Header2">Better Life</h1>
				<p className="Home-Description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<button className="Home-Explorer">Explorer</button>
			</div>
			<div className="Home-Layer2">
				<img src={Plant} />
			</div>
		</div>
	)
}

export default Home