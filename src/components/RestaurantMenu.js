import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { async } from "regenerator-runtime";
import { addItem } from "../utils/cartSlice";
import RestaurantMenuList from "./RestauranttMenuList";
import { IMAGEURL } from "../utils/Constant";
import Shimmer from "./Shimmer";
import useRestaurant from "./useRestaurant";
import { useDispatch } from "react-redux";

const RestrauntMenu = () =>{

    

    const { resid } = useParams();

    const dispatch = useDispatch();

    const handleItem = () =>{
        console.log('Here');
        dispatch(addItem("Grapes"));
    }
    //const [restaurant, setrestaurant] = useState(null);
    //const [menuitems, setmenuitems] = useState({});
    const restaurant = useRestaurant(resid);
    //const restaurantwidget = 
    return (!restaurant) ? <Shimmer /> :(
        <div class="grid px-80 py-5">
            <div>
                <div>
                    <div class="grid grid-cols-2 h-10">
                        <p className="text-sm">Home/ Bangalore/ {restaurant.info.name}</p>
                        <div dir="rtl">
                             <div class="me-8 ..."><p className="text-sm">Search</p></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 h-10 py-5">
                        <div> <h1>{restaurant.info.name}</h1></div>
                        <div></div>
                        <div></div>
                        <div class="col-span-2">
                            <p>{restaurant.info.areaName}</p>
                        </div>
                       
                    </div>
                    <br></br>
                    
                    <div class="grid grid-cols-3 gap-4 h-10 py-7">
                        <div class="..."><p>{restaurant.info.sla.minDeliveryTime} MINS</p></div>
                        <div class="..."><p>{restaurant.info.costForTwoMessage}</p></div>
                    </div>

                    <div class="grid grid-cols-3 gap-4 h-10 py-7">
                        <div className="..."><p>Veg Only Filter</p></div>

                    </div>

                    <div className="h-25 py-15">
                        <p>Here we areee</p>

                    </div>

                    <h1>We are RestrauntMenu Page</h1>
                    <h2>Restaurant id is {resid}</h2>
                    <h2>Name is -{restaurant.info.name}</h2>
                    <h2>locality is - {restaurant.info.locality}</h2>
                    <h2>Price for two is - {restaurant.info.costForTwo}</h2>
                    <img src={IMAGEURL + restaurant.info.cloudinaryImageId}/>

                    <div className="container">
                       
                        <RestaurantMenuList menu={restaurant.menu}/>

                    </div>

                    <div>
                        <button className="p-2 m-5 bg-green-100" onClick={()=> handleItem()}>Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestrauntMenu;