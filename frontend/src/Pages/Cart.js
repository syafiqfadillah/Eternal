import React from "react"
import {Link} from "react-router-dom"
import Card from "../Components/Cardcart.js"
import CardSeller from "../Components/CardSellercart.js"
import NavbarLogin from "../Components/NavbarLogin.js"
import Footer from "../Components/Footer.js"

import "../Assets/CSS/NavbarLogin.css"; 
import "../Assets/CSS/Footer.css";
import '../Assets/CSS/Cart.css';

const Cart = () =>{
    
    const Order= [
        {
            namaproduk: "Tuba (Derris elliptica)",
            price: "Rp 100.000",
            subtotal: "Rp 100.000"
          },
          {
            namaproduk: "Melati putih (Jasminum sambac)",
            price: "Rp 50.000",
            subtotal: "Rp 50.000"
          },
          {
            namaproduk: "Gloksinia (Gloxinia speciosa)",
            price: "Rp 10.000.000",
            subtotal: "Rp 10.000.000",
          },
          
    ];
    const seller =[
      {namaseller : "Thyme Out Shop"}
    ]


    return(
      <div className="bgcart">
        <NavbarLogin/>
        <div className="cart">  
            <div className="toko1">
              <div className="namaseller">
                {seller.map((card,i) =>(
                  <CardSeller key={i} namaseller={card.namaseller} />
                ))}
              </div>
            <table id="tb" className="tabel-none">
              <tr>
                <th className="tableproduct">Product</th>
                <th className="tablequantity">Quantity</th>
                <th className="tablesubtotal">Subtotal</th>
              </tr>
              {Order.map((card, i) => (
                
                  <Card key={i} namaproduk={card.namaproduk} price={card.price} subtotal={card.subtotal} />
                
              ))}    
            </table>
          </div>
          <div className="beli">
                <h4>Ringkasan Belanja</h4>
                <p>Jumlah : 3 Barang</p>
                <p>Total harga : Rp. 10.150.000</p>
                <button className="cartco">Check Out</button>
          </div>
        </div>
        <Footer/>
      </div>
    )
}
export default Cart