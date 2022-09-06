import React, { useEffect, useState } from "react";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isvalid, setIsvalid] = useState(false);


    const login = (event) => {
        event.preventDefault();
        localStorage.setItem("login", "true")   
        props.login("true");
        
    };

    const emailHandler = (event) => {
        console.log("email");
        setEmail(event.target.value);
    }
    const passHandler = (event) => {
        console.log("password");
        setPassword(event.target.value);
    }
    useEffect(() => {
        if ((email.includes("@")) && (password.length > 4)) {
            setIsvalid(true)
        }
    }, [email, password])
    return (
        <form onSubmit={login}>
            <input placeholder='enter your email' onChange={emailHandler} value={email} />
            <input placeholder='enter your password' onChange={passHandler} value={password} />

            {isvalid ? <button>login</button> : <button disabled>login</button>}
        </form>
    )
}
export default Login;

