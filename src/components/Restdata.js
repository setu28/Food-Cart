import React from "react";
import { useState,useEffect,useContext } from "react";
import { async } from "regenerator-runtime";
import { IMAGEURL,restaurantlist,filterdata } from "../utils/Constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import UserContext from "./UserContext";
import { Data } from "../utils/useLocal";

const Restdata = () =>{

    const [restaurantsfiltered, setrestaurantsfiltered] = useState([]);
    const [restaurants, setrestaurants] = useState([0]);
    
    useEffect(()=>{
        //API CALL
        getRestaurant();
    },[]);

    async function getRestaurant(){
        try{
            //Saved the fetched data for consistency and using it 
            console.log("COMING TIL HERE");
            const datasaved = Data;
            setrestaurants(datasaved[0].data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
            setrestaurantsfiltered(datasaved[0].data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
        }
        catch(error){
            console.log(error);
        }
    }

    const RestrauntCard = (props) => {
        const {user} = useContext(UserContext);
        return (
            <div className="flex flex-wrap px-4">
                <div className="w-56 p-2 m-4 shadow-lg bg-pink-50">
                    <img src={
                            IMAGEURL
                            +props.cloudinaryImageId
                        } 
                    />
                    <h2 className="font-bold text-1xl">{props.name}</h2>
                    <h3>Rating - {props.avgRating}</h3>
                    <h3>{props.locality}</h3>
                    
                </div>
            </div>
            );
        };

    return(
        <div className="flex flex-wrap">
            <div className="flex flex-wrap">
                {  
                    restaurantsfiltered.map((restaurants) =>{
                        return (
                                <Link
                                    to={"/restaurants/" +restaurants.info.id}
                                    key={restaurants.info.id}>
                                    <RestrauntCard {...restaurants.info} key={restaurants.info.id}/>
                                </Link>
                            );
                    }) 
                }
            </div>
        </div>
    )
}

export default Restdata;