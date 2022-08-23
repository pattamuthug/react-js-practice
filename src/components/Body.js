import './Body.css';
import briyani from "./images/briyani.jpg";
import friedrice from "./images/fried rice.jpg";
import idly from "./images/idly.jpg";
import parotta from "./images/parotta.webp";
import grill from "./images/Tandoori-Chicken-20.jpg";


function Food() {
    const dish = [
        {
            name: "Briyani",
            time: "30min",
            distance: "15km",
            rate: "₹200 for one"
        },
        {
            name: "Idly",
            time: "10min",
            distance: "4km",
            rate: "₹10 for one"
        },
        {
            name: "Grill",
            time: "30min",
            distance: "18km",
            rate: "₹200 for one"
        },
        {
            name: "Rotti",
            time: "10min",
            distance: "3km",
            rate: "₹50 for one"
        },
        {
            name: "Fried rice",
            time: "40min",
            distance: "25km",
            rate: "₹100 for one"
        }
    ]
    return (
        <div>
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
            <div className='fooditems'>
                <div className='dish'>
                    <img src={briyani}></img><div>
                        <p><h2>{dish[0].name}</h2></p>
                        <p>{dish[0].time}</p>
                        <p>{dish[0].distance}</p>
                        <p>{dish[0].rate}</p>
                    </div>
                </div>
                <div className='dish'>
                    <img src={idly}></img><div>
                        <p><h2>{dish[1].name}</h2></p>
                        <p>{dish[1].time}</p>
                        <p>{dish[1].distance}</p>
                        <p>{dish[1].rate}</p>
                    </div>
                </div>
                <div className='dish'>
                    <img src={grill}></img><div>
                        <p><h2>{dish[2].name}</h2></p>
                        <p>{dish[2].time}</p>
                        <p>{dish[2].distance}</p>
                        <p>{dish[2].rate}</p>
                    </div>
                </div>
                <div className='dish'>
                    <img src={parotta}></img><div>
                        <p><h2>{dish[3].name}</h2></p>
                        <p>{dish[3].time}</p>
                        <p>{dish[3].distance}</p>
                        <p>{dish[3].rate}</p>
                    </div>
                </div>
                <div className='dish'>
                    <img src={friedrice}></img><div>
                        <p><h2>{dish[4].name}</h2></p>
                        <p>{dish[4].time}</p>
                        <p>{dish[4].distance}</p>
                        <p>{dish[4].rate}</p>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default Food;