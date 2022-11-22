import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import Setting from './Pages/Setting';
import DetailProduct from "./Pages/DetailProduct";
import reportWebVitals from './reportWebVitals';
import Toko from "./Pages/Toko"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Signup from './Pages/Signup';
import Checkout from './Pages/Checkout';

import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
        {/*<Toko/>*/}
        {/*<Cart/>*/}
        {/*<DetailProduct />*/}
        {/*<Checkout />*/}
        {/*<Login />*/}
        {/*<Signup />*/}
      </Router>
    </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
