import React, { useEffect } from "react";
import { useState } from "react";
import { Data } from "../utils/useLocal";
import { BANNERIMAGEURL } from "../utils/Constant";

const Offer = () =>{

    const [bannerdata, setbannerdata] = useState([]);

    useEffect(()=>{
        //API CALL
        getBanner();
    },[]);

    async function getBanner(){
        try{
            //Saved the fetched data for consistency and using it 
            
            const datasaved = Data;
            setbannerdata(datasaved[0].data.cards[0].card.card.gridElements.infoWithStyle.info);
        }
        catch(error){
            console.log(error);
        }
    }

    const Bancard = (props) =>{
       
        
        return (
            <div className="flex flex-wrap px-1 py-5">
                <div className="w-56 py-5 shadow-lg bg-pink-50">
                    <img src={
                            BANNERIMAGEURL
                            +props.imageId
                        } 
                    />
                    
                </div>
            </div>
            );
        
    }

    return(
           <div className="flex flex-wrap">
                <div className="flex flex-wrap px-40 py-10">
                    <h1 className="font-bold text-2xl">Best offers for you</h1>
                    {
                        bannerdata.map((banndata)=>{
                            return(
                                <Bancard {...banndata} key={banndata.id}/>

                            );
                        })
                    }
                    
                    
                    
                </div>
           </div>
        
    )
    
}

export default Offer;