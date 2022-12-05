import {Link} from "react-router-dom"
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"
import "../Assets/CSS/Signup.css"

const Signup = () =>{
    return(
        <div className="Signup">
            <div className="colomndftr">
                <div className="apadftr"></div>
                <img className="bglogindftr" src={bg}/>
            </div>
            <div className="isi3">
                <div className="logonamadftr">
                    <img src={logo} ></img>
                </div>
                <div className="isi4">
                      <input className="dftr" type="text" placeholder="Nama "/> <br/>
                      <input className="dftr" type="text" placeholder="Alamat "/> <br/>   
                      <input className="gender" type="radio" id="male" name="Gender" value="M"/> <label for="male">Male </label>
                      <input className="gender" type="radio" id="female" name="Gender" value="F"/> <label for="female">Female</label> <br/>
                      <input className="dftr" type="text" placeholder="Input e-mail"/> <br/>
                      <input className="dftr" type="password" placeholder="Password"/> <br/>
                      <input className="dftr" type="password" placeholder="Confirm Password"/> <br/>
                      <button className="btnsignup">Log In</button> <br/>
                      <label for="akun">Sudah punya akun? </label>
                      <a href="" id="akun">Login</a>
                      {/* <Link to="/" id="akun">Login</Link> */}
                </div>
                
                
            </div>
        </div>
    )
}
export default Signup