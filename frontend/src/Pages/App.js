import Navbar from "../Components/Navbar.js";
import NavbarLogin from "../Components/NavbarLogin.js";
import Home from "../Components/Home.js";
import Label from "../Components/Label.js";
import SwiperMod from "../Components/SwiperMod.js";
import Reason from "../Components/Reason.js";
import Footer from "../Components/Footer.js";

import '../Assets/CSS/App.css';
import '../Assets/CSS/Navbar.css';
import '../Assets/CSS/NavbarLogin.css';
import '../Assets/CSS/Home.css';
import '../Assets/CSS/Label.css';
import '../Assets/CSS/Card.css';
import '../Assets/CSS/SwiperMod.css';
import '../Assets/CSS/Reason.css';
import '../Assets/CSS/Footer.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const cards = [
    {
      head: "This is a Tree",
      price: "Rp 100.000"
    },
    {
      head: "This is a not a Tree",
      price: "Rp 50.000"
    },
    {
      head: "This is a Tree",
      price: "Rp 10.000.000"
    },
    {
      head: "This is a Tree",
      price: "Rp 10.000.000"
    },
      {
      head: "This is a Tree",
      price: "Rp 100.000"
    },
    {
      head: "This is a not a Tree",
      price: "Rp 50.000"
    },
    {
      head: "This is a Tree",
      price: "Rp 10.000.000"
    },
    {
      head: "This is a Tree",
      price: "Rp 10.000.000"
    },
  ]

  return (
    <div className="App">
      <NavbarLogin />
      <Home />
      <Label />
      <div className="Slider">
        <div className="Products-Header">
          <h2>Products</h2>
          <SwiperMod data={cards} />
        </div>
      </div>
      <Reason />
      <Footer /> 
    </div>
  );
}

export default App;
