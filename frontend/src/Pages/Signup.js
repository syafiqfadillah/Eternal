import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../Assets/Images/eternal-logo.png"
import bg from "../Assets/Images/bglogin.png"
import "../Assets/CSS/Signup.css"

const Signup = () =>{

    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [alamat, setAlamat] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Signup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:7789/users', {
                nama,
                alamat,
                nohp,
                gender,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });
            navigate.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    

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
                      <input className="dftr" type="text" placeholder="Nama " required value={nama} onChange={(e) => setNama(e.target.value)} /> <br/>
                      <input className="dftr" type="text" placeholder="No. Handphone" value={nohp} onChange={(e) => setNohp(e.target.value)}/> <br/>   
                      <input className="dftr" type="text" placeholder="Alamat " value={alamat} onChange={(e) => setAlamat(e.target.value)}/> <br/>   
                      <input className="gender" type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> <label for="male">Male </label>
                      <input className="gender" type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> <label for="female">Female</label> <br/>
                      <input className="dftr" type="text" placeholder="Input e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>
                      <input className="dftr" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
                      <input className="dftr" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br/>
                      <button className="btnsignup" onClick={Signup}>Log In</button> <br/>
                      <label for="akun">Sudah punya akun? </label>
                      <a href="" id="akun">Login</a>
                      {/* <Link to="/" id="akun">Login</Link> */}
                </div>
                
                
            </div>
        </div>
    )
}
export default Signup