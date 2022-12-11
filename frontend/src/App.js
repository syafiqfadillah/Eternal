import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCardData, setCurrentPath } from './Redux/counterSlice';

import Home from "../src/Pages/Home.js";
import Toko from "../src/Pages/Toko.js";
import Explore from "./Pages/Explore.js";
import DetailProduct from "../src/Pages/DetailProduct.js";
import SearchResult from "./Pages/SearchResult";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "../src/Pages/Cart.js";

import "../src/Assets/CSS/Cart.css";
import "../src/Assets/CSS/NavbarLogin.css";
import "../src/Assets/CSS/Explore.css";
import "../src/Assets/CSS/SearchResult.css";

import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NavbarLogin from "./Components/NavbarLogin";
import Footer from "./Components/Footer.js"

function App() {
    const dispatch = useDispatch()
    const currentPath = useSelector(state => state.counter.currentPath)

    useEffect(() => {
      axios.get('https://dummyjson.com/products')
        .then(res => dispatch(setCardData(res.data.products)))
        .catch(err => console.log(err))
    }, [])

    let navbar
    let footer

    if (currentPath != "/Login" && currentPath != "/Signup") {
      navbar = <Navbar />
      footer = <Footer />
    }

    return (
      <div className="App" onClick={window.location.reload}>
        {navbar}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product" element={<DetailProduct />} />
          <Route path="/Store" element={<Toko />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Result" element={<SearchResult />} />
        </Routes>
        {footer}
      </div>
    );
}

export default App;
