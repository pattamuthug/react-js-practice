
import { useState } from 'react';
import briyani from "./images/idly.jpg";
function Fooditems(props) {
    const [rate, setRate] = useState(props.rate)

    const offer = () => {
        setRate(props.rate / 2);
    };
    return (
        <>
            <div className='fooditems'>
                <div className='dish'>
                    <img src={briyani} alt={props.name}></img>
                    <div>
                        <p><h2>{props.name}</h2></p>
                        <p>{props.time}</p>
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


// export function Formitems(props) {
//     const[dishname,setDishName]=useState(props.lname);
//     const replace=()=>{
//         setDishName("chennai");
//     };
//     return (<>
//         <div className='formitems'>
//         <p>{props.diname}</p>
//         <p>{dishname}</p>
//         <p>{props.qty}</p>
//         <button className="offer" onClick={replace}>edit</button>
//     </div>
//     </>);

// };


