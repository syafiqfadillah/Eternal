// import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"

import "../Assets/CSS/Login.css";

import "../Assets/CSS/Login.css"

// REDUX
// import { useDispatch, useSelector } from "react-redux"
// import { setProfile, set } from "../Redux/counterSlice"

const Login = () =>{
  const [formData, setFormData] = useState({
    email: '', // required
    password: '' // required
  })

  function handleSubmit(e) {
      e.preventDefault()
      fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(console.log);
      // .then(data => console.log(data.user))
      // .then(res => console.log(res.user))
  }

  function handleChange(e) {
      setFormData({...formData, [e.target.name] : e.target.value})
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
                <form className='login-form' onSubmit={e => handleSubmit(e)}>
                  <input type='text' placeholder='Email' value={formData.email} name='email' onChange={e => handleChange(e)} ></input>
                  <input type='password' placeholder='Password' value={formData.password} name='password' onChange={e => handleChange(e)} ></input>
                  <button className='login-btn' type='submit'>Login</button>
                </form>
                <label for="akun">Belum punya akun? </label>
                <a href="" id="akun">Login</a>
                {/* <Link to="/Signup" id="akun">Sign Up</Link> */}
            </div >
          </div>
      </div>
    )
}

export default Login