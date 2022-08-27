import { useState } from 'react'
import './Form.css'

export default function Form(props) {
    const[fooditem, setFoodItem]= useState({
        
        name: "",
        time: "",
        location: "",
        rate: '',
        
    });
    const dishHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, name: event.target.value}
        });
    }
    
    const lHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, time: event.target.value}
        });
    }
    const qtyHandle=(event)=>{
        setFoodItem((previousState)=>{
            return{...previousState, location: event.target.value }
    });
}
    const rateHandle=(event)=>{
    setFoodItem((previousState)=>{
        return{...previousState, rate: event.target.value}
    });

}
    const submitHandler=(event)=>{
        event.preventDefault();
        // console.log(fooditem);
        props.onFormAdd(fooditem);
        setFoodItem({  name: "",
        time: "",
        location: "",
        rate: "",
        qty:''});
    }
    
    return(
        <form className="form-container" onSubmit={submitHandler}>
            <input type="text" placeholder="enter the dish name" value={fooditem.name} onChange={dishHandle} />
            {/* <input type="text" placeholder="enter the hotelname" value={fooditem.hname} onChange={hHandle} /> */}
            <input type="text" placeholder="enter the time" value={fooditem.time} onChange={lHandle} />
            <input type="text" placeholder="enter the location" value={fooditem.location} onChange={qtyHandle} />
            <input type="number" placeholder="enter the price" value={fooditem.rate} onChange={rateHandle} />
            <input type="submit"/>
        </form>
    );
};