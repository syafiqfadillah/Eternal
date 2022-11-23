import {useEffect} from "react";

import Home from "./Home.js";
import NavbarLogin from "../Components/NavbarLogin.js";
import DetailProduct from "./DetailProduct.js";
import Toko from "./Toko.js";

import Cart from "./Cart.js";

import "../Assets/CSS/App.css";
import "../Assets/CSS/Cart.css";
import "../Assets/CSS/NavbarLogin.css";

import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCardData, setIndex } from '../Redux/counterSlice';

function App() {
  let dispatch = useDispatch()
  const cardData = useSelector((state) => state.counter.cardData)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        dispatch(setCardData(res.products))
      });
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<DetailProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
