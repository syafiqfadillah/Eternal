import Home from "../Components/Home.js";
import NavbarLogin from "../Components/NavbarLogin.js";
import DetailProduct from "./DetailProduct.js";

import Cart from "./Cart.js";

import "../Assets/CSS/App.css";
import "../Assets/CSS/Cart.css";
import "../Assets/CSS/NavbarLogin.css";

import { Routes, Route } from "react-router-dom";

function App() {

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
