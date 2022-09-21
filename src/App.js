import './App.css';
import Login from "./components/Header/login.js";
import userContext from './userContext';
import Header from './components/Header/Header.js';
import pizza from "./components/images/pizz.jpg";
import Signup from './components/Header/Sign/SignUp';
import Fooddetails from './components/Main/Fooddetails';
import Addcart from './components/Main/AddCart/AddCart.js';
import React,{useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";

function App() {

    const [isloggedin, setLoggedin] = useState("false");

    // const loginHandler = (log) => {
    //     setLoggedin('log')
    // }

    return (
        <div className="App">
    <userContext.Provider value={{setLoggedin}}>            
            <Routes>
                <Route index element={<Header></Header>}></Route>
                <Route path='/login' element={<Login></Login>} />
                <Route path='/signup' element={<Signup image={pizza} />}></Route>
                <Route path='/details/:id' element={<Fooddetails/>}/>
                <Route path='/addcart' element={<Addcart></Addcart>}></Route>
                
            </Routes>
    </userContext.Provider>
        </div>
    );
}

export default App;

