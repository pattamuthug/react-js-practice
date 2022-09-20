import './App.css';
import Login from "./components/Header/login.js";
import Header from './components/Header/Header.js';
import pizza from "./components/images/pizz.jpg";
import Signup from './components/Header/Sign/SignUp';
import Fooddetails from './components/Main/Fooddetails';
import React,{useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";

function App() {

    const [isloggedin, setLoggedin] = useState("false");



    const loginHandler = (log) => {
        setLoggedin('log')
    }

    
    return (
        <div className="App">
            <Routes>
                <Route index element={<Header logOut={loginHandler}></Header>}/>
                <Route path='/login' element={<Login login={loginHandler}></Login>} />
                <Route path='/signup' element={<Signup image={pizza} />}></Route>
                <Route path='/details/:id' element={<Fooddetails/>}/>
                
            </Routes>
        </div>
    );
}

export default App;

