// import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form.js';
import Login from "./components/login";
import './components/Body.css'
import './components/Body.js';
import Header from './components/Header';
// import { Formlist } from "./components/Body";
import Food from "./components/Body.js";

// import briyani from "./components/images/briyani.jpg";
// import friedrice from "./components/images/fried rice.jpg";
// import idly from "./components/images/idly.jpg";
// import parotta from "./components/images/parotta.webp";
// import grill from "./components/images/Tandoori-Chicken-20.jpg";
import { useEffect, useState } from 'react';


function App() {
    const dish = [];
    const [dishitems, setMenuitems] = useState(dish);
    const [isloggedin, setLoggedin] = useState("false");
   
 
    useEffect(()=>{
        setLoggedin(localStorage.getItem("login"));
    },[])
    const loginHandler=(log)=>{
        setLoggedin(log)
    }
    
        useEffect(()=>{
            // const intervalId = setInterval(() => {
            console.log("summa");
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/fooditems').then((response)=>{
            if (response.ok) {
                return response.json()
            } 
            return false
        })
        .then((data)=>{
            setMenuitems(data)
        })
    // }, 1000);
    // return()=>{
    //     console.log("unmount");
    //     clearInterval(intervalId);
    // }
    },[]);
    const FormHandler = (muthu) => {
        setMenuitems((premenuitems) => {
            return [...[muthu], ...premenuitems]
        });

    }
        
   
//     useEffect(()=>{
//         console.log("summa");
//     fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/fooditems').then((response)=>{
//         if (response.ok) {
//             return response.json()
//         } 
//         return false
//     })
//     .then((data)=>{
//         setMenuitems(data)
//     })
// },[])

    return (
        <div className="App">
            <Header logOut={loginHandler}></Header>
            {
                isloggedin =="true" ? <Form onFormAdd={FormHandler}></Form> : <Login login={loginHandler}></Login>
            }

            {
                isloggedin =="true" ? <Food details={dishitems}></Food> : <p>Please log in..!</p>

            }
            

        </div>
    );
}

export default App;

