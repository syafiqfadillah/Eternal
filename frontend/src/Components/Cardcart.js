import imgcart from "../Assets/Images/Plant-Card0.png";
import { useState, useEffect } from "react";
import hapus from "../Assets/Images/trash-bin.png";

const Card = (props) => {
    const [nilai, setNilai] = useState(1);

    const tambah = () => {
        setNilai(nilai + 1);
	};
    const kurang = () => {
		if (nilai > 1 ) { 
        setNilai(nilai - 1);
		}
	};
	
	return (	
		<tr className="descart">
			<td className="tableproduct">
				<div >
					<input type="checkbox" name="buy" className="checkboxcart" />
				</div>
				<div className="imgprodtoko">
					<img className="imgcart" src={imgcart} />
				</div>
				<div>
					<a href="" className="namaprodcart">{props.namaproduk}</a>
					<p>${props.price}</p>
				</div>
			</td>
			<td className="desctotal">
				<a href=""><img src={hapus} className="imghapus" /></a>
        	    <button onClick={kurang} className="btncart" >-</button> <span> {nilai} </span> <button onClick={tambah} className="btncart">+</button>
			</td>
			<td>${props.subtotal * nilai}</td>
		</tr>
	)
}

export default Card