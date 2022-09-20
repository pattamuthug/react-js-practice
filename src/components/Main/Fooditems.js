
import React,{ useState} from 'react';
import { Routes, Route, Link,useNavigate} from "react-router-dom";
import './Fooditems.css';
import briyani from "../images/briyani.jpg";
import friedrice from "../images/fried rice.jpg";
import idly from "../images/idly.jpg";
import parotta from "../images/parotta.webp";
import grill from "../images/Tandoori-Chicken-20.jpg";

function Fooditems(props) {
    const [rate, setRate] = useState(props.rate);
    const detailsNavigate=useNavigate();
    
    const[like,setLike]=useState("unlike");
    const likeHandler=(event)=>{
        event.preventDefault();
        if (like=="unlike") {
            setLike("liked")
        } else {
            setLike("unlike")
        }
    }
    const foodimages = [briyani,friedrice,idly,parotta,grill];
    const offer = () => {
        setRate(props.rate / 2);
    
    }
    function detailsHandler(){
        detailsNavigate('/details/'+ props.id);
    }
    return (
        <>
            <div className='fooditems'>
                <div className='dish' >
                    <img src={foodimages[Math.floor(Math.random()*(foodimages.length-1))]} alt={props.name}></img>
                    {/* <img src={props.img}></img> */}
                    <div>
                        {/* <Link to={props.id}><h2>{props.name}</h2></Link> */}
                        <h2 onClick={detailsHandler}>{props.name}</h2>
                        <p>{props.time}min</p>
                        <p>{props.location}</p>
                        <p>₹{rate} for one</p>
                        <button className="offer" onClick={offer}>Apply offer 50%</button>
                        {/* <button onClick={cartHandler}>add to cart</button> */}
                    </div>
                    
                </div>
                <div className='likecover'><p className={like} onClick={likeHandler}>&#9829;</p></div>

            </div>
        </>
    );

};
export default Fooditems;
