import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setCardData } from './Redux/counterSlice';

import Home from "../src/Pages/Home.js";
import Toko from "../src/Pages/Toko.js";
import Explore from "./Pages/Explore.js";
import DetailProduct from "../src/Pages/DetailProduct.js";

import Cart from "../src/Pages/Cart.js";

import "../src/Assets/CSS/App.css";
import "../src/Assets/CSS/Cart.css";
import "../src/Assets/CSS/NavbarLogin.css";
import "../src/Assets/CSS/Explore.css";

import { Routes, Route } from "react-router-dom";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
      axios.get('https://dummyjson.com/products')
        .then(res => dispatch(setCardData(res.data.products)))
        .catch(err => console.log(err))
    }, [])

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product" element={<DetailProduct />} />
          <Route path="/Store" element={<Toko />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </div>
    );
}

export default App;
