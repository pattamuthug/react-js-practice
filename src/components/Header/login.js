import React, { useEffect, useState } from "react";
import userContext from "../../userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import {Link} from "react-router-dom";
import "./login.css";

function Login(props) {
    const [users,setUsers]=useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isvalid, setIsvalid] = useState(false);
    let navigateto = useNavigate();
    const logIn = useContext(userContext);
  


    const login = (event) => {

        event.preventDefault();
        localStorage.setItem("login", "true")
        // props.login("true");
        logIn.setLoggedin("true")
        navigateto('/');
        console.log("summa");
    };

    const emailHandler = (event) => {
        // console.log("email");
        setEmail(event.target.value);
        // console.log(email);
    }
    const passHandler = (event) => {
        // console.log("password");
        setPassword(event.target.value);
    }
    useEffect(() => {
        const userLogin ={};
        userLogin.email = email;
        userLogin.password = password;
        if ((email.includes("@")) && (password.length > 4)) {
            setIsvalid(true)
        }
        // var newArray = users.filter(()={
        //     return {userLogin.email};
        // })
        // console.log(newArray);
        console.log(userLogin);
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/users').then((response)=>{
                    if (response.ok) {
                        return response.json()
                    } 
                    return false
                })
                .then((data)=>{
                    setUsers(data)
                })
                // console.log(users);

    }, [email, password])
    let signto = useNavigate();
    const Signup = () => {
        signto('/signup')
        console.log(userLogin);
    }
    return (<div className="body">
        <div className="container">
            <form className="form" onSubmit={login}>
                <h1>Oreo Login</h1>
                <label htmlFor='mail'>Usermail Id</label>
                <input id="mail" placeholder='Type your email' onChange={emailHandler} value={email} />
                <label htmlFor='pass'>password</label>
                <input id="pass" type='password' placeholder='Type your password' onChange={passHandler} value={password} />
                <p>Forgot password?</p>
                {isvalid ? <button>LOGIN</button> : <button disabled>LOGIN</button>}
                <div>
                <p className="signtext">Or Sign Up Using</p>
                <div className="icons">
                       <a href="https://twitter.com"><i className="fa fa-twitter socialLink"></i></a> 
                        <a href="https://www.facebook.com"><i className="fa fa-facebook socialLink" id="face"></i></a>
                        <a href="https://www.instagram.com/accounts/login/"><i className="fa fa-instagram socialLink" id="insta"></i></a>
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

