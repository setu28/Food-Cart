import React from "react";
import { useState,useEffect } from "react";
import { CUISINEIMAGEURL } from "../utils/Constant";
import { Data } from "../utils/useLocal";

const Cuisines = () =>{
    const [cuisinedata, setcuisinedata] = useState([]);

    useEffect(()=>{
        //API CALL
        getCuisine();
    },[]);

    async function getCuisine(){
        try{
            //Saved the fetched data for consistency and using it 
            console.log("COMING TIL HERE");
            const datasaved = Data;
            setcuisinedata(datasaved[0].data.cards[1].card.card.gridElements.infoWithStyle.info);
        }
        catch(error){
            console.log(error);
        }
    }

    const Cuisinecard = (props) =>{
        console.log("Inside map functions",props.imageId);
        
        return (
            <div className="flex flex-wrap px-1 py-5">
                    <img src={
                            CUISINEIMAGEURL
                            +props.imageId
                        } 
                    />
            </div>
            );
        
    }

    return(
           <div className="flex flex-wrap">
                <div className="flex flex-wrap px-40 py-10">
                    <h1 className="font-bold text-2xl">What's On Your Mind?</h1>
                    {
                        cuisinedata.map((datacuisine)=>{
                            return(
                                <Cuisinecard {...datacuisine} key={datacuisine.id}/>

                            );
                        })
                    }
                    
                    
                    
                </div>
           </div>
        
    )
    
}

export default Cuisines;