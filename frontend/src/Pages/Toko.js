import Card from "../Components/Cardtoko.js"
import NavbarLogin from "../Components/NavbarLogin.js"
import Footer from "../Components/Footer.js";
import imgseller from "../Assets/Images/dp-seller.jpg"

import axios from 'axios';
import { useEffect } from "react";
import { setById } from '../Redux/counterSlice';
import { useDispatch } from 'react-redux';

import "../Assets/CSS/Navbar.css"; 
import "../Assets/CSS/Footer.css";
import '../Assets/CSS/Toko.css';

function Toko() {
    const Order =[
        {
            nama : "Kamelia Jepang (Camellia japonica)",
            harga : "Rp. 10.000"
        },
        {
            nama : "Gloksinia (Gloxinia speciosa)",
            harga : "Rp. 10.000.000"    
        },
        {
            nama : "Melati putih (Jasminum sambac)",
            harga : "Rp. 50.000"    
        },
        {
            nama : "Tanaman",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Zodia (Evodia suaveolens)",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Nagasari (Palaquium rostratum)",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Trembesi (Albizia saman Sin. Samanea saman)",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Tanaman",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Cattleya (Cattleya)",
            harga : "Rp. 10.000"    
        },
        {
            nama : "Tuba (Derris elliptica)",
            harga : "Rp. 100.000"    
        },
        {
            nama : "Anggrek bulan (Phalaenopsis amabilis).",
            harga : "Rp. 10.000"    
        },
]

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id.slice(4, id.length)}`)
            .then(res => {
                // re-assign data
                let data = {}

                data["image"] = res.data["images"][0]
                data["title"] = res.data["title"]
                data["price"] = res.data["price"]
                data["stock"] = res.data["stock"]
                data["description"] = res.data["description"]
                
                dispatch(setById(data))
            })
    })

    return(
    <div className="bg">
        <div className="toko"> 
            <div className="profile">
                <div className="profileseller">
                    <img className="imgseller" src={imgseller} />
                    <div className="bioseller">
                        <h1 className="namaseller">Thyme Out</h1>
                        <p className="lokasi">Jakarta, Indonesia</p>
                        {/* <button className="chat">Chat</button> */}
                    </div>
                </div>
                <div className="totalprod">
                    <p>Total Produk : 11</p>
                </div>
            </div> 
            <div className="cardprod">
                {Order.map((card, i) => 
                    <div className="wrap">
                        <Card key={i} nama={card.title} harga={card.price} />
                    </div>
                    )}
            </div> 
        </div>
    </div>
    )
}
export default Toko