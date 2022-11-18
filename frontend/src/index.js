import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import Setting from './Pages/Setting';
import DetailProduct from "./Pages/DetailProduct";
import Checkout from "./Pages/Checkout";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import reportWebVitals from './reportWebVitals';
import Toko from "./Pages/Toko"
import Cart from "./Pages/Cart"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     {/* <Setting />  */}
     {/*<Toko/>*/}
     {/* <Cart/> */}
    {/*<DetailProduct />*/}
    {/*<Checkout />*/}
    {/*<Login />*/}
    {/*<Signup />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
