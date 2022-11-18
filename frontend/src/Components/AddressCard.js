import Point from "../Assets/Images/Point.png";

function AddressCard() {
	return (
		<div className="AlamatCheckout">
			<div className="AlamatCheckout-Header">
				<h2><img src={Point} />Alamat Pengiriman</h2>
			</div>
			<div className="AlamatCheckout-Alamat">
				<div className="Admin">
					<p>Admin</p>
				</div>
				<div className="Alamat">
					<p>
						Lorem ipsum dolor sit amet, 
						consectetur adipiscing elit, sed do 
						eiusmod tempor incididunt ut labore et 
						dolore magna aliqua. Ut enim ad minim 
						veniam, quis nostrud exercitation ullamco 
						laboris nisi ut aliquip ex ea commodo consequat. 
					</p>
				</div>
			</div>
		</div>
	)
}

export default AddressCard