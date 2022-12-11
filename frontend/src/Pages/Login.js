import axios from 'axios';
import { useState } from "react"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"

import "../Assets/CSS/Login.css";

import "../Assets/CSS/Login.css"
import { useDispatch } from 'react-redux';
import { setCurrentPath } from '../Redux/counterSlice';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const dispatch = useDispatch()

    dispatch(setCurrentPath(location.state))

    const Login = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:7789/login', {
                email: email,
                password: password
            });
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
                  <button onClick={() => navigate("/", {state: "/"})}><img className="iimg" src={logo} ></img></button>
              </div>
            <div className="isi1">
                <h1>Welcome</h1>
                <div className='login-form'>
                  <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                  <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                  <button className='btnlogin' type='button' onClick={Login}>Login</button>
                </div>
                <span>
                  <label for="akun">Belum punya akun? </label>
                  <button id="akun" onClick={() => navigate("/Signup", {state: "/Signup"})}>Signup</button>
                </span>
            </div >
          </div>
      </div>
    )
}

export default Login