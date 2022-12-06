// import {Link} from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"

import "../Assets/CSS/Login.css";

import "../Assets/CSS/Login.css"

// REDUX
// import { useDispatch, useSelector } from "react-redux"
// import { setProfile, set } from "../Redux/counterSlice"

const Login = () =>{
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Login = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7789/login', {
                email: email,
                password: password
            });
            // console.log(res)
            navigate.push("/") 
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }



    return(
      <div className="Login">
          <div className="colomn1">
            <div className="apa"></div>
            <img className="bglogin" src={bg}/>
          </div>
          <div className="colomn2">  
              <div className="logonama">
                  <img className="iimg" src={logo}/>
              </div>
            <div className="isi1">
                <h1>Welcome</h1>
                <div className='login-form'>
                  <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                  <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                  <button className='login-btn' type='button' onClick={Login}>Login</button>
                </div>
                <label for="akun">Belum punya akun? </label>
                <a href="" id="akun" >Login</a>
                {/* <Link to="/Signup" id="akun">Sign Up</Link> */}
            </div >
          </div>
      </div>
    )
}

export default Login