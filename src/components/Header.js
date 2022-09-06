import React, { useEffect, useState } from "react";
import logo from "../components/download.png";


function Header(props) {
 
    const logoutHandler=(event)=>{
        event.preventDefault();
        // localStorage.setItem("login",false);
        // console.log("false");
        props.logOut(false);
    
    
    };
    useEffect(()=>{
        localStorage.getItem("login"); 
    },[])
        return(<>
            <header className="App-header">
                <img src={logo} className="logo"></img>
                <h1>OREO</h1>
                <input type='text' placeholder="enter your dish or restaurant..."></input>
               {
                localStorage.getItem("login") ? <button onClick={logoutHandler}>log out</button>:<button disabled>sign in</button>
               } 
            </header>

            <div className='filters'>
                <div className='items'>
                    <select>
                        <option>sort</option>
                    </select>
                    <select>
                        <option>Fast Delivery</option>
                    </select>
                    <select>
                        <option>Great Offers</option>
                        <option>summa</option>
                    </select>
                    <select>
                        <option>Rating</option>
                    </select>
                    <select>
                        <option>Great Offers</option>
                    </select>
                    <select>
                        <option>New Arrivals</option>
                    </select>
                    <select>
                        <option>Cuisines</option>
                    </select>
                </div>
            </div></>

        );
    
};
export default Header;