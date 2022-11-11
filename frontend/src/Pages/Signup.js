import {Link} from "react-router-dom"
import logo from "../Assets/Images/eternal-logo.png"

const Signup = () =>{
    return(
        <div className="Signup">
            <span className="svg">
                <svg className="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a7c957" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,90.7C320,117,400,203,480,229.3C560,256,640,224,720,181.3C800,139,880,85,960,74.7C1040,64,1120,96,1200,117.3C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </span> 
            <div className="isi3">
                <div className="logonama">
                    <img src={logo} ></img>
                </div>
                <div className="isi4">
                      <input className="dftr" type="text" placeholder="Nama "/> <br/> 
                      <input className="dftr" type="text" placeholder="Alamat "/> <br/>   
                      <input className="gender" type="radio" id="male" name="Gender" value="M"/> <label for="male">Male </label>
                      <input className="gender" type="radio" id="female" name="Gender" value="F"/> <label for="female">Female</label> <br/>
                      <input className="dftr" type="text" placeholder="Input e-mail"/> <br/>
                      <input className="dftr" type="password" placeholder="Password"/> <br/>
                      <button className="btnsignup">Log In</button>
                </div>
                <label for="akun">Sudah punya akun? </label>
                <Link to="/" id="akun">Login</Link>
            </div>
        </div>
    )
}
export default Signup