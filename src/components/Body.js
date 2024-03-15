import { useState,useEffect,useContext } from "react";
import { async } from "regenerator-runtime";
import { IMAGEURL,filterdata } from "../utils/Constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import UserContext from "./UserContext";
import Caraousel from "./Carousel";
import Restdata from "./Restdata";
import Offer from "./Offer";
import Cuisines from "./Cuisines";

const Body = () => {
    const [restaurantsdata, setrestaurantsdata] = useState([0]);
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
      //API CALL
      getRestaurant();
    },[]);

    async function getRestaurant(){
        try{ 
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING");
            const responsedata = await response.json();
            console.log("Response her",responsedata);
            setrestaurantsdata(responsedata.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
          }
        catch(error){
            console.log("Error here");
            console.log(error);
        }
    }



const isOnline = useOnline();
if(!isOnline){
return <h1>Offline you are!!!!</h1>
}
console.log("render",isOnline);
return (restaurantsdata.length == 0)?<Shimmer/>:(
<>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Restdata/>

        </div>
        
        
            
        
        
      </div>
</>
);
};
export default Body;
