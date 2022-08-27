// import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form.js';
import './components/Body.css'
import './components/Body.js';
// import { Formlist } from "./components/Body";
import Food from "./components/Body.js";
import logo from "./components/download.png";
// import briyani from "./components/images/briyani.jpg";
import friedrice from "./components/images/fried rice.jpg";
import idly from "./components/images/idly.jpg";
import parotta from "./components/images/parotta.webp";
import grill from "./components/images/Tandoori-Chicken-20.jpg";
import { useState } from 'react';


function App() {
    const dish = [
        {
            name: "Briyani",
            time: "30min",
            location: "trichy",
            rate: 200
            // img: briyani
        },
        {
            name: "Idly",
            time: "10min",
            location: "tenkasi",
            rate: 10
            // img: idly
        },
        {
            name: "Grill",
            time: "30min",
            location: "salem",
            rate: 200
            // img: grill
        },
        {
            name: "Rotti",
            time: "10min",
            location: "madurai",
            rate: 50
            // img: parotta
        },
        {
            name: "Fried rice",
            time: "40min",
            location: "chennai",
            rate: 150
            // img: friedrice
        }
    ];
    const [dishitems,setMenuitems]=useState(dish);
    const FormHandler=(muthu)=>{
      
    
        setMenuitems((premenuitems)=>{
            return[...[muthu],...premenuitems]
        });
        
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo"></img>
                <h1>OREO</h1>
                <input type='text' placeholder="enter your dish or restaurant..."></input>
                <button>login</button>
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
            <Form onFormAdd={FormHandler}></Form>
    
          <Food details={dishitems}></Food>

        </div>
    );
}

export default App;

// export function MainForm() {
//     const menu = [

//     ];
//     const [menuitems,setMenuitems]=useState(menu);
//     const FormHandler=(ajay)=>{
      
    
//         setMenuitems((premenuitems)=>{
//             return[...[ajay],...premenuitems]
//         });
        
//     }
//     return (<>
//     <Form onFormAdd={FormHandler}></Form>
    
//     <Formlist details={menuitems}></Formlist>
//     </>);
// }
