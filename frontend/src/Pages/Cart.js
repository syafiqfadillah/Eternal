import React from "react"

import Card from "../Components/Cardcart"
import CardSeller from "../Components/CardSellercart.js"

import "../Assets/CSS/NavbarLogin.css"; 
import "../Assets/CSS/Footer.css";
import '../Assets/CSS/Cart.css';
import { useSelector } from "react-redux";

const Cart = () =>{
    const order = [
        {
            namaproduk: "Tuba (Derris elliptica)",
            price: 100000,
            subtotal: 100000
          },
          {
            namaproduk: "Melati putih (Jasminum sambac)",
            price: 50000,
            subtotal: 50000
          },
          {
            namaproduk: "Gloksinia (Gloxinia speciosa)",
            price: 10000000,
            subtotal: 10000000,
          },
          
    ];
    const seller = [
      {namaseller : "Thyme Out Shop"}
    ]

    let total = 0

    order.forEach((item, i) => {
      total += item.price
    })

    return(
      <div className="bgcart">
        <div className="cart">  
            <div className="toko1">
              <div className="namaseller">
                {seller.map((card,i) =>(
                  <CardSeller key={i} namaseller={"admin"} />
                ))}
              </div>
            <table id="tb" className="tabel-none">
              <tr>
                <th className="tableproduct">Product</th>
                <th className="tablequantity">Quantity</th>
                <th className="tablesubtotal">Subtotal</th>
              </tr>
              {order.map((card, i) => (
                  <Card key={i} namaproduk={card.title} price={card.price} subtotal={card.subtotal} />
              ))}    
            </table>
          </div>
          <div className="beli">
                <h4>Ringkasan Belanja</h4>
                <p>Jumlah : {Object.keys(order).length} Barang</p>
                <p>Total harga : ${total}</p>
                <button className="cartco">Check Out</button>
          </div>
        </div>
      </div>
    )
}
export default Cart