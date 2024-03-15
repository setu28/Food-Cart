import React from "react";
import { useState,useEffect } from "react";
import { StaticData } from "../utils/useLocal";
import { Link } from "react-router-dom";
import { IMAGEURL } from "../utils/Constant";
import { filterData } from "../utils/Helper";

const Search = () =>{

    const [searchText, setSearchText] = useState();
    const [restaurantsfiltered, setrestaurantsfiltered] = useState([]);
    const [restaurants, setrestaurants] = useState([0]);
    const [errorMsg, setErrorMsg] = useState(" ");

    useEffect(()=>{
        getData();
    },[]);

     async function getData(){
        const datasaved = StaticData;
        setrestaurants(datasaved[0].restaurants);
        setrestaurantsfiltered(datasaved[0].restaurants);
    }


    const searchData = (searchText) =>{
        console.log(searchText);
        filterData(searchText,restaurants);
        /*
        if(searchText !== ''){
            const data = filterData(searchText);
            console.log("INthe funti",data);
            //setrestaurantsfiltered(data);
            setErrorMsg('');
            if(data.length === 0){
                setErrorMsg('No matches Found');
            }
        }
        else{
            if(errorMsg) setErrorMsg('');
            setrestaurants(restaurants);
        }
        */
        
    }

    const RestrauntCard = (props) => {
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

    return (
        <>
           <div className="col-span-5 text-center">
                <div className="p-10 m-90">
                    <input 
                        className="w-1/2 border border-gray-400 p-2 rounded-3xl"
                        type="text"
                        placeholder="Seach for restaurants and food"
                        value={searchText}
                        key="input-text" 
                        onChange = {(e) => setSearchText(e.target.value)}
                    />
                </div>
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
            </div>
        </>
    )
}

export default Search;