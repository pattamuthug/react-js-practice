import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Fooddetails() {
    const[foodDetails, setDetails]=useState({})
    const params = useParams();
    console.log(params.id);
    useEffect(()=>{
        fetch('https://6315a5215b85ba9b11e3c470.mockapi.io/muthu/fooditems/'+params.id).then((details)=>{
            if (details.ok) {
                return details.json()
            } else {
                return false
            }
        })
        .then((details)=>{
            setDetails(details)
        })
    },[params.id])
    return(<>
        <div className="details">
            <div className="container">
            <img src={foodDetails.result}></img>
            <div className="detailsContent">
            <p>{foodDetails.name}</p>
            <p>{foodDetails.location}</p>
            <p>{foodDetails.time}</p>
            <p>{foodDetails.rate}</p>
            </div>
            </div>
        </div>
     </>)
};
export default Fooddetails;