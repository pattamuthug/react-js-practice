import './App.css';
import Form from './components/Header/form/Form.js';
import Login from "./components/Header/login.js";
import Header from './components/Header/Header.js';
import Foodlist from "./components/Main/Foodlist.js";
import sky from "./components/images/sky1.jpg";
import pizza from "./components/images/pizz.jpg";
import Signup from './components/Header/Sign/SignUp';
import { useEffect, useState } from 'react';
import { Routes, Route, Link, Router } from "react-router-dom";

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

            </Routes>

        </div>
    );
}

export default App;

