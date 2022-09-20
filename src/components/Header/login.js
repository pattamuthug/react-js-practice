import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import "./login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isvalid, setIsvalid] = useState(false);
    let navigateto = useNavigate();
  


    const login = (event) => {

        event.preventDefault();
        localStorage.setItem("login", "true")
        props.login("true");
        navigateto('/');
    };

    const emailHandler = (event) => {
        // console.log("email");
        setEmail(event.target.value);
    }
    const passHandler = (event) => {
        // console.log("password");
        setPassword(event.target.value);
    }
    useEffect(() => {
        if ((email.includes("pattamuthu")) && (password.length > 4)) {
            setIsvalid(true)
        }

    }, [email, password])
    let signto = useNavigate();
    const Signup = () => {
        signto('/signup')
    }
    return (<div className="body">
        <div className="container">
            <form className="form" onSubmit={login}>
                <h1>Oreo Login</h1>
                <label for='mail'>Username</label>
                <input id="mail" placeholder='Type your email' onChange={emailHandler} value={email} />
                <label for='pass'>password</label>
                <input id="pass" type='password' placeholder='Type your password' onChange={passHandler} value={password} />
                <p>Forgot password?</p>
                {isvalid ? <button>LOGIN</button> : <button disabled>LOGIN</button>}
                <div>
                <p className="signtext">Or Sign Up Using</p>
                <div className="icons">
                       <a href="https://twitter.com"><i class="fa fa-twitter socialLink"></i></a> 
                        <a href="https://www.facebook.com"><i class="fa fa-facebook socialLink" id="face"></i></a>
                        <a href="https://www.instagram.com/accounts/login/"><i class="fa fa-instagram socialLink" id="insta"></i></a>
                </div>
                </div>
                <div>
                    <p className="signtext">Or Sign Up Using</p>
                    <h3 className="signup" onClick={Signup}>SIGN UP</h3>

                </div>
            </form>

        </div>
    </div>
    )
}
export default Login;

