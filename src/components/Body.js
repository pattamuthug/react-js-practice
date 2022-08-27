import './Body.css';
import "./Bodyitems.js";
import Fooditems from "./Bodyitems.js";
// import { Formitems } from './Bodyitems.js';

function Food(props) {

    return (
        <div className='foot-container'>
    {/* <Fooditems img={props.item[0].img} name={props.item[0].name} time={props.item[0].time} distance={props.item[0].distance} rate={props.item[0].rate}></Fooditems>
    <Fooditems img={props.item[1].img} name={props.item[1].name} time={props.item[1].time} distance={props.item[1].distance} rate={props.item[1].rate}></Fooditems>
    <Fooditems img={props.item[2].img} name={props.item[2].name} time={props.item[2].time} distance={props.item[2].distance} rate={props.item[2].rate}></Fooditems>
    <Fooditems img={props.item[3].img} name={props.item[3].name} time={props.item[3].time} distance={props.item[3].distance} rate={props.item[3].rate}></Fooditems>
    <Fooditems img={props.item[4].img} name={props.item[4].name} time={props.item[4].time} distance={props.item[4].distance} rate={props.item[4].rate}></Fooditems> */}
    
    {
            props.details.map((items)=>{
                return <Fooditems key={Math.random()} img={items.img} name={items.name} time={items.time} loaction={items.loaction} rate={items.rate}></Fooditems>
            })
        }
    </div>
    );
};

export default Food;

// export function Formlist(props){
//     return(
//         <>
//         {/* <Formitems diname={props.details[0].diname} lname={props.details[0].lname} qty={props.details[0].qty}></Formitems>
//         <Formitems diname={props.details[1].diname} lname={props.details[1].lname} qty={props.details[1].qty}></Formitems> */}
//         {
//             props.details.map((items)=>{
//                 return <Formitems key={Math.random()} diname={items.diname} lname={items.lname} qty={items.qty}></Formitems>
//             })
//         }


        
//         </>
        
//     );
// };