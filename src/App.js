import './App.css';
import Login from "./components/Header/login.js";
import userContext from './userContext';
import Header from './components/Header/Header.js';
import pizza from "./components/images/pizz.jpg";
import Signup from './components/Header/Sign/SignUp';
import Fooddetails from './components/Main/Fooddetails';
import Cartlist from './components/Main/AddCart/Cartlist.js';
import React,{useEffect, useState } from 'react';
import { Routes, Route, Link} from "react-router-dom";

function App() {
    const [addCart, setAddCart]=useState([]);
    const [isloggedin, setLoggedin] = useState("false");

    // const loginHandler = (log) => {
    //     setLoggedin('log')
    // }
    const addcart=(items)=>{
     
        setAddCart((preitems)=>{
            return[...[items],...preitems]
        })
    }
    useEffect(()=>{
        console.log(addCart);
    });
    return (
        <div className="App">
    <userContext.Provider value={{setLoggedin,addcart,addCart}}>            
            <Routes>
                <Route index element={<Header addCart={addCart}></Header>}></Route>
                <Route path='/login' element={<Login></Login>} />
                <Route path='/signup' element={<Signup image={pizza} />}></Route>
                <Route path='/details/:id' element={<Fooddetails/>}/>
                <Route path='/addcart' element={<Cartlist></Cartlist>}></Route>
                {/* <Route path='/addcart' element={<Addcart></Addcart>}></Route> */}
                
            </Routes>
            {/* <Cartlist></Cartlist> */}
    </userContext.Provider>
        </div>
    );
}

export default App;

