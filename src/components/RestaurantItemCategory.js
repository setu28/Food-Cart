import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import MenuItem from "./MenuItem.js";

const RestaurantItemCategory = ({itemCategory}) =>{
    const [isVisible, setIsVisible] = useState(false);

    const toggleView = () => {
        console.log('setting toggle');
        //console.log(itemCategory)
        setIsVisible(!isVisible);
        //console.log(isVisible);
        //({itemCategory.itemCards.length})
      };
      
    
    
    return(
        <div className="p-5">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg cursor-pointer" onClick={toggleView}>
                    {itemCategory.title} 
                </h3>
                {isVisible ? (
                    <SlArrowUp onClick={toggleView}/>

                ) :(
                    <SlArrowDown onClick={toggleView}/>

                )}
            </div>
            {isVisible && (
                <div className="flex flex-col justify-evenly">
                    
                    {console.log(itemCategory.itemCards)}
                    {itemCategory.itemCards.map((item)=>(
                        <MenuItem key={item.card.info.id} items={item.card.info}/>

                    ))}
                   
                        
                    
                </div>
            )}
        </div>
    )

}

export default RestaurantItemCategory;