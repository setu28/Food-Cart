
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import RestaurantItemCategory from "./RestaurantItemCategory";
import Shimmer from "./Shimmer";

const RestaurantMenuList = ({menu}) =>{
    console.log('testing',menu);
    return !menu ? (
        <Shimmer/>
    ) :(
        <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
            <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
                {menu.map((item,index)=> (
                    <div key={index}>
                        <RestaurantItemCategory itemCategory={item}/>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenuList;