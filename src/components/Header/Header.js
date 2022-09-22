// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer.js";
import { useContext } from "react";
import userContext from "../../userContext.js";
import Form from './form/Form.js';
import logo from "../images/download.png";
import './Header.css';
import Foodlist from "../Main/Foodlist.js";
import { useEffect, useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";
function Header(props) {
    const addcartto = useNavigate();
    let logoutTo = useNavigate();
    const logOut = useContext(userContext);
    const logoutHandler = (event) => {
        event.preventDefault();
        localStorage.setItem("login", "false");
        logOut.setLoggedin('false');
        logoutTo('/login')
    };
    
    const loginHandler = () => {
        logoutTo('/login')
    }
    useEffect(() => {
        localStorage.getItem("login");
    })
    const [dishitems, setMenuitems] = useState([]);
    const [isloggedin, setLoggedin] = useState("false");


    useEffect(() => {
        setLoggedin(localStorage.getItem("login"));
    }, [isloggedin])

    useEffect(() => {
        // console.log("summa");
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/fooditems').then((response) => {
            // console.log(response.json());
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setMenuitems(data)
            })
       
    }, []);
    const FormHandler = (muthu) => {
        setMenuitems((premenuitems) => {
            return [...[muthu], ...premenuitems]
        });

    }
    const addHandler=()=>{
        addcartto("/addcart");
    }
    
    return (<>
        <header className="App-header">

            <img src={logo} className="logo"></img>
            <h1>OREO</h1>
            <input type='text' placeholder="enter your dish or restaurant..."></input>
            <div><i className="fa fa-cart-plus" onClick={addHandler}></i> <p>{props.addCart.length}</p></div>
            {
                localStorage.getItem("login") == "true" ? <button onClick={logoutHandler}>Log out</button> : <button onClick={loginHandler}>Log in</button>
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
        </div>
        {
            isloggedin == "true" ? [<Form onFormAdd={FormHandler} key={'asd'}></Form>, <Foodlist details={dishitems} key={'nsdf'}></Foodlist>] : <p>please log in..!</p>
        }
       
    <Footer></Footer>
    </>

    );

};
export default Header;