import {Link} from "react-router-dom"
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"

import "../Assets/CSS/Login.css";

const Login = () =>{
    return(
      <div className="Login">
          {/* <span className="svg">
              <svg className="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a7c957" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,90.7C320,117,400,203,480,229.3C560,256,640,224,720,181.3C800,139,880,85,960,74.7C1040,64,1120,96,1200,117.3C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          </span> */}
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
                <input className="dftr" type="text" placeholder="Input e-mail"/> <br/>
                <input className="dftr" type="text" placeholder="Password"/> <br/>
                <button className="btnlogin">Log In</button> <br/>
                <label for="akun">Belum punya akun? </label>
                <a href="" id="akun">Login</a>
                {/* <Link to="/Signup" id="akun">Sign Up</Link> */}
            </div >
          </div>
      </div>
    )
}

export default Login