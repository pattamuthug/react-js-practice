
import { useState,Component } from 'react';
// import briyani from "./images/idly.jpg";
import grill from "./images/Tandoori-Chicken-20.jpg";

function Fooditems(props) {
    const [rate, setRate] = useState(props.rate)

    const offer = () => {
        setRate(props.rate / 2);
    
    }
    return (
        <>
            <div className='fooditems'>
                <div className='dish'>
                    <img src={grill} alt={props.name}></img>
                    <div>
                        <p><h2>{props.name}</h2></p>
                        <p>{props.time}min</p>
                        <p>{props.location}</p>
                        <p>₹{rate} for one</p>
                        <button className="offer" onClick={offer}>Apply offer 50%</button>
                    </div>
                </div>

            </div>
        </>
    );

};
export default Fooditems;
