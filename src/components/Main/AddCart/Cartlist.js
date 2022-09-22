import userContext from "../../../userContext";
import { useContext, useEffect } from "react";
import AddCart from "./AddCart";


function Cartlist() {
    const cardList = useContext(userContext)
    useEffect(()=>{
        console.log(cardList.addCart);
    })
  
    return(<>
    {
        cardList.addCart.map((cards)=>{
            return <AddCart key={Math.random()} name={cards.name} location={cards.location} rate={cards.rate}></AddCart>
        })
    }
    </>)
};
export default Cartlist;